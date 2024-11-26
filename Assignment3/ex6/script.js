document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.rect-button');
    let active = false;
    let activeRect;


    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (active) {
                anime({
                    targets: activeRect,
                    width: '100px',
                    height: '100px', // -> maximal längd blir 100% av tillgänglig höjd i body
                    easing: 'easeInOutQuad',
                    duration: 1000
                });
                active = false;
            } else {
                anime({
                    targets: btn.nextElementSibling,
                    width: '200px',
                    height: '200px', // -> maximal längd blir 100% av tillgänglig höjd i body
                    easing: 'easeInOutQuad',
                    duration: 1000
                });
                active = true;
                activeRect = btn.nextElementSibling;
            }



        })
    })

    
});

