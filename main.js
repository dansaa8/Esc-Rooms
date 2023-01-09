const btn = document.querySelector('.header__mobileBtn');

btn.addEventListener('click', (ev) => {
    const menu = document.querySelector('.header__nav');
    menu.classList.toggle('open');
    const burgerStripes = document.querySelectorAll('.burger__stripe');
    if (menu.classList.contains('open')) {
        burgerStripes.forEach((stripe) => {
            stripe.classList.add('open');
        })
    } else if (!menu.classList.contains('open')) { 
            burgerStripes.forEach((stripe) => {
                stripe.classList.remove('open');
            })
        }
        ev.preventDefault();

    })