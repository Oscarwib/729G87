document.addEventListener('DOMContentLoaded', () => {

const rectangles = document.querySelectorAll('.rectangle');

rectangles.forEach(rect => {
    rect.addEventListener('mouseenter', () => {
        anime({
            targets: rect,
            height: '100vh', // -> maximal längd blir 100% av tillgänglig höjd i body
            easing: 'easeInOutQuad',
            duration: 1000
          });
    })

    rect.addEventListener('mouseleave', () => {
        anime({
            targets: rect,
            height: '5vh', // -> återgår till den ursprungliga storlken
            easing: 'easeInOutQuad',
            duration: 1000
          });
    })

});
});

