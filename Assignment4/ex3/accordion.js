const template = document.createElement("template");
template.innerHTML = `

<style>

.accordion button::before {
    content: "▶︎ ";
}
  
.accordion button[aria-expanded="true"]::before {
    content: "▼︎ ";
}



</style>




`