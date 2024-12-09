const template = document.createElement("template");
template.innerHTML = `
<style>

ul {
    list-style-type: none;
    padding: 0;
}

.accordion button::before {
  content: "▶︎ ";
  padding-right: 5px;
}

.accordion button[aria-expanded="true"]::before {
  content: "▼︎ ";
  padding-right: 5px;
}

button {
    border: unset;
    background-color: gray;
    color: white;
    width: 100%;
    height: 60px;
    display: flex;
    font-size: 22px;
    font-weight: bold;
    text-align: left;
    cursor: pointer;
    padding: 5px;
    
}

li {    
    margin: 5px;
    border: 1px solid gray;
}

li p {
    margin: 10px;
}


 
</style>

<div class="accordion">
  <ul>
  </ul>
</div>

`;

class accordion extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const allAcc = this.querySelectorAll("h2");

    allAcc.forEach((elem) => {
        const li = document.createElement('li');
        const heading = document.createElement('button');

        heading.innerHTML = elem.innerHTML;

        heading.setAttribute("aria-expanded", "false");

        this.shadowRoot.querySelector('ul').appendChild(li);
        li.appendChild(heading);

    })

    this.querySelectorAll('div').forEach((div, index) => {
        const text = document.createElement('div');
        this.shadowRoot.querySelector('ul').children[index].appendChild(text);
        text.innerHTML = div.innerHTML;
        text.hidden = true; 


    })

    
    

  }
  connectedCallback() {
   
    this.shadowRoot.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
  
          if (button.getAttribute("aria-expanded") == "false") {
            button.setAttribute("aria-expanded", "true");
            button.nextSibling.hidden = false;
          } else {
            button.setAttribute("aria-expanded", "false");
            button.nextSibling.hidden = true;
          }
  
        });
      });



  }
}

window.customElements.define("accordion-component", accordion);