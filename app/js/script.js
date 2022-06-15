// Sticky Navbar

const header = document.querySelector('header');
const navbar = document.querySelector('.navbar');
const navbarLogoFirst = document.getElementById('navbar__logo--primary');
const navbarLogoSecond = document.getElementById('navbar__logo--secondary');
let sticky = navbar.offsetTop;

window.onscroll = function() {myFunction()};

function myFunction() {
    if (window.pageYOffset >= sticky) {
      header.classList.add('sticky');
      navbarLogoFirst.classList.remove('active');
      navbarLogoSecond.classList.add('active');
    } else {
      header.classList.remove('sticky');
      navbarLogoFirst.classList.add('active');
      navbarLogoSecond.classList.remove('active');
    }
}

// Dropdown navigation menu

const menuBtn = document.querySelector('.icon-menu-btn');
const closeBtn = document.querySelector('.icon-close-btn');
const navbarMenu = document.querySelector('.navbar__menu');

[closeBtn, menuBtn].forEach(item => {
    item.addEventListener('click', () => {
      [closeBtn, menuBtn, navbarMenu].forEach(btn => {
        btn.classList.toggle('active');
      });
    });
});


//Slider 

const slider = document.querySelector('.slider__content');
const btnPrev = document.querySelector('.slider__prev-Arrow');
const btnNext = document.querySelector('.slider__next-Arrow');
const card = document.querySelector('.slider__card');
const cards = document.querySelectorAll('.slider__card');
const indicators = [... document.querySelectorAll('.slider__indicator')];
const sliderParagraph = [... document.querySelectorAll('.slider__paragraph--responsive')];
let cardWidth = card.offsetWidth;
let windowWidth = window.innerWidth;
let numOfSlides = cards.length - 1;
let slideNumber = 0;

btnNext.addEventListener('click',() => {
    if (slideNumber < numOfSlides) {
        slideNumber++;
    } else {
      return slideNumber;
    }
    for(let i = 0; i < indicators.length; i++) {
      indicators[i].classList.remove('indicator__active');
      sliderParagraph[i].classList.remove('paragraph__active');
    }
    slider.style.transform = `translateX(-${slideNumber*cardWidth}px)`;
    indicators[slideNumber].classList.add('indicator__active');
    sliderParagraph[slideNumber].classList.add('paragraph__active');
});
  
btnPrev.addEventListener('click',() => {
    if (slideNumber > 0) {
        slideNumber--;
    } else {
      return slideNumber;
    }
    for(let i = 0; i < indicators.length; i++) {
      indicators[i].classList.remove('indicator__active');
      sliderParagraph[i].classList.remove('paragraph__active');
    }
    slider.style.transform = `translateX(-${slideNumber*cardWidth}px)`;
    indicators[slideNumber].classList.add('indicator__active');
    sliderParagraph[slideNumber].classList.add('paragraph__active');
});