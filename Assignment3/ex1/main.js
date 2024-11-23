document.addEventListener('DOMContentLoaded', (event) => {

    const box = document.createElement('div');
    box.classList.add('box');
    document.body.appendChild(box);
    
  
    box.addEventListener('mouseover', ourFunction);
  
    function ourFunction() {
       box.remove();
    }
  
  });