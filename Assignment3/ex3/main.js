// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  
  const inputArea = document.getElementById('text-input');
  const outputArea = document.getElementById('output-area')

  inputArea.addEventListener('input', () => {
    outputArea.textContent = inputArea.value;
  });

 });
 