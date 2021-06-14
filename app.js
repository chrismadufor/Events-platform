const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav');
const navWrap = document.querySelector('.nav-wrap')

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    bar.classList.toggle('rotate')
    navWrap.classList.toggle('nav-animation')
    // navWrap.style.animation = 'navbar 0.3s linear'
})

function lockScroll() {
    document.body.classList.toggle('lock-scroll');
}