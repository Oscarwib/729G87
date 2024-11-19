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

const imageContainer = document.querySelector('.slides');

chosenImg.forEach(imageSrc => {
    const img = document.createElement('img');
    img.src = imageSrc;
    img.classList.add('image');
    imageContainer.appendChild(img);
});


let currentSlide = 0; //current index
const slideImages = document.querySelectorAll('.image');
slideImages[currentSlide].classList.add('active');
const totalSlideImages = slideImages.length;

function updateDisplay() {

    // måste börja med att en är active

    slideImages.forEach(img => img.classList.remove('active'))
    slideImages[currentSlide].classList.add('active');

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


