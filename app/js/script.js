// Sticky Navbar

const navbar = document.querySelector('.navbar');
const iconMenu = document.querySelector('.icon-menu');
const iconClose = document.querySelector('.icon-close');
const headerContainer = document.querySelector('.header__container');
const navbarLogoFirst = document.getElementById('navbar__logo--primary');
const navbarLogoSecond = document.getElementById('navbar__logo--secondary');
let sticky = navbar.offsetTop;

window.onscroll = function() {myFunction()};

function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky');
      navbarLogoFirst.classList.remove('active');
      navbarLogoSecond.classList.add('active');
      iconMenu.classList.add('menu-active');
      iconClose.classList.add('menu-active');
      headerContainer.classList.add('container--active');
    } else {
      navbar.classList.remove('sticky');
      navbarLogoFirst.classList.add('active');
      navbarLogoSecond.classList.remove('active');
      iconMenu.classList.remove('menu-active');
      iconClose.classList.remove('menu-active');
      headerContainer.classList.remove('container--active');
    }
}

// Dropdown navigation menu

const menuBtn = document.querySelector('.icon-menu-btn');
const closeBtn = document.querySelector('.icon-close-btn');
const navbarMenu = document.querySelector('.navbar__menu');

[closeBtn, menuBtn].forEach(item => {
    item.addEventListener('click', () => {
        closeBtn.classList.toggle('active');
        menuBtn.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });
});
