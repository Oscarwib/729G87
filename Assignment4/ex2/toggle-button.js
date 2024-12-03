// kan behöva flyttas in i webcomponenten, 
const template = document.createElement("template");
template.innerHTML = `

<style>
    .wrapper {
        display: flex;
        align-items: center;
    }

    .toggle{
        width: 15px;
        height: 15px;
        border: 1px solid black;
        margin: 5px;
        cursor: pointer;
    }

    .toggle-active {
        background-color: lightgreen;
        cursor: pointer;
    }


</style>

  <div class="wrapper">
    <p>label txt</p>
    <div class="toggle" aria-pressed="false"></div>
  </div>
  `;

class toggleButton extends HTMLElement {
    constructor() {
        super();
        this.value = 0;
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("p").innerHTML = this.getAttribute("label");
    }

    connectedCallback() {
        this.shadowRoot.querySelectorAll(".toggle").forEach((sqr) => {
            // här lägger vi interaktionen
            // den kan behövas göras utan en så kallad arrow function, eventlistener med två inmat
            sqr.addEventListener('click', () => {
                sqr.classList.toggle("toggle-active");

                if (sqr.getAttribute("aria-pressed") === "true") {
                    sqr.setAttribute("aria-pressed", "false");
                    this.value = 0;
                } else {
                    sqr.setAttribute("aria-pressed", "true");
                    this.value = 1;
                }

                const event = new CustomEvent("input", {
                    bubbles: true,
                    detail: { sqr : () => this.value }
                });
                this.dispatchEvent(event);
            });
        })
    }

}





window.customElements.define("toggle-button", toggleButton);