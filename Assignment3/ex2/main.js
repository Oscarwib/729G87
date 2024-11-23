// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
   const dropdown = document.getElementById('options');
   const squares = document.querySelectorAll('.square');
 
   // Event listener for dropdown change
   dropdown.addEventListener('change', () => {
     const selectedValue = parseInt(dropdown.value, 10);
 
     // Show or hide squares based on the selected value
     squares.forEach((square, index) => {
       if (index < selectedValue) {
         square.style.display = 'block';
       } else {
         square.style.display = 'none';
       }
     });
   });
 });
 