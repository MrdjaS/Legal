// Sticky Navbar

const header = document.querySelector('header');
const navbar = document.querySelector('.navbar');
const navbarLogoFirst = document.getElementById('navbar__logo--primary');
const navbarLogoSecond = document.getElementById('navbar__logo--secondary');
let sticky = navbar.offsetTop;

window.onscroll = function() {stickyNavbar()};

const stickyNavbar = () => {
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
const navbarLinks = [...document.querySelectorAll('.navbar__list li a')];

[closeBtn, menuBtn,... navbarLinks].forEach(item => {
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

for(let i = 0; i < indicators.length; i++) {
  indicators[i].addEventListener('click', () => {
    slideNumber = i;
    slider.style.transform = `translateX(-${slideNumber*cardWidth}px)`;
    for(j=0;j<indicators.length;j++) {
      indicators[j].classList.remove('indicator__active');
      sliderParagraph[j].classList.remove('paragraph__active');
    }
    indicators[i].classList.add('indicator__active');
    sliderParagraph[i].classList.add('paragraph__active');
  })
}


//CountUp in financial section

const countUpFirstNumber = new CountUp('financial__number--1', 0, 74.3,1,4);
const countUpSecondNumber = new CountUp('financial__number--2', 0, 10,0,4);
const countUpThirdNumber = new CountUp('financial__number--3', 0, 13.6,1,4);
const countUpFourthNumber = new CountUp('financial__number--4', 0, 4.1,1,4);
const countUpFifthNumber = new CountUp('financial__number--5', 0, 80,0,4);
const countUpSixthNumber = new CountUp('financial__number--6', 0, 15.9,1,4);
const countUpSeventhNumber = new CountUp('financial__number--7', 0, 14.33,2,4);
const countUpEighthNumber = new CountUp('financial__number--8', 0, 2.44,2,4);
const countUpNinthNumber = new CountUp('financial__number--9', 0, 41,0,4);
const countUpNumbers = [countUpFirstNumber, countUpSecondNumber, countUpThirdNumber, countUpFourthNumber, countUpFifthNumber, countUpSixthNumber, countUpSeventhNumber, countUpEighthNumber, countUpNinthNumber];


let headerHeight = header.offsetHeight;
let sliderHeight = document.querySelector('.slider').offsetHeight;
let viewportHight = window.innerHeight;

window.addEventListener('scroll', ()=> {
  let viewportPosition = this.scrollY;
  if (viewportPosition + viewportHight >= headerHeight + sliderHeight) {
    const countUpFunction = countUpNumbers.forEach(number => {
      number.start();
    });
    countUpFunction;
  } 
});










