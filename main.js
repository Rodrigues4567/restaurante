
const responsiveBtn = document.querySelector('.responsive-btn');

responsiveBtn.addEventListener('click', menuShow = () => {
    let responsiveMenu = document.querySelector('.responsive-options');

    if (responsiveMenu.classList.contains('open')) {
        responsiveMenu.classList.remove('open');
    }
    else {
        responsiveMenu.classList.add('open');
    }
})