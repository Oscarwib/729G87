const image = [
    'images/image1-small.jpg',
    'images/image1.jpg',
    'images/image2-small.jpg',
    'images/image2.jpg',
    'images/image3-small.jpg',
    'images/image3.jpg',
    'images/image4-small.jpg',
    'images/image4.jpg',
    'images/image5-small.jpg',
    'images/image5.jpg',
    'images/image6-small.jpg',
    'images/image6.jpg',
    'images/image7-small.jpg',
    'images/image7.jpg',
    'images/image8-small.jpg',
    'images/image8.jpg'
];




const chosenImg = image.filter(src => !src.includes('-small'));

const imageDisplay = document.querySelector('.slides');

chosenImg.forEach(imageSrc => {
     const img = document.createElement('img');
     img.src = imageSrc;
     img.classList.add('image');
 
     // Create a wrapper div for the image and overlay
     const wrapper = document.createElement('div');
     wrapper.classList.add('image-wrapper');
 
     // Create the overlay box
     const overlay = document.createElement('div');
     overlay.classList.add('overlay');
     overlay.textContent = imageSrc; // Set the text to the source path
 
     // Append the image and overlay to the wrapper
     wrapper.appendChild(img);
     wrapper.appendChild(overlay);
 
     // Append the wrapper to the slides container
     imageDisplay.appendChild(wrapper);
});


let currentSlide = 0; //current index
const slideImages = document.querySelectorAll('.image-wrapper');
const totalSlideImages = slideImages.length;
updateDisplay();

function updateDisplay() {

    // måste ändra så att det är wrappern som vi gör till active eller inactive

    slideImages.forEach(img => img.classList.add('inActive'))
    slideImages[currentSlide].classList.remove('inActive');

}

function changeLeft() {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = totalSlideImages - 1;
    }

    updateDisplay()

};

function changeRight() {
    currentSlide++;

    if (currentSlide >= totalSlideImages) {
        currentSlide = 0;
    }

    updateDisplay()

};

const leftArrowButton = document.getElementById('left');
const rightArrowButton = document.getElementById('right');

leftArrowButton.addEventListener('click', changeLeft);
rightArrowButton.addEventListener('click', changeRight);


