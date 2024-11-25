document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    const squares = document.querySelectorAll('.square');
    const rectangles = document.querySelectorAll('.rectangle');

    circles.forEach(circ => {
        circ.addEventListener('click', () => {
            if (circ.classList.contains('green')) {
                circ.classList.remove('green');
            } else {
                circ.classList.add('green');
            }
        });
    });

    squares.forEach(sqr => {

        sqr.addEventListener('click', () => {

            const style = window.getComputedStyle(sqr);
            const currWidth = parseFloat(style.getPropertyValue("width"));
            const currHeight = parseFloat(style.getPropertyValue("height"));

            sqr.style.width = currWidth / 2 + "px";
            sqr.style.height = currHeight / 2 + "px";

        });
    });

    rectangles.forEach(rect => {

        let translateY = 0;

        rect.addEventListener('click', () => {
            translateY += 10;
            rect.style.transform = `translate(0px, ${translateY}px)`;


        });
    });

});