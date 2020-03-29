// Constants
const NAV = document.querySelector('.header__nav');
const portfolioBtns = document.querySelector('ul.buttons');
const portfolioBlock = document.querySelector('.portfolio__images');
const messageBlock = document.getElementById('message-block');
const name = document.getElementById('form-name');
const email = document.getElementById('form-email');
const subject = document.getElementById('form-subject');
const describe = document.getElementById('form-detail');
const formSubmit = document.getElementById('form-submit');
const closeBtn = document.getElementById('close-btn');
const verticalBtn = document.querySelector('.vertical-circle');
const horizontalBtn = document.querySelector('.horizontal-circle');
const slider = document.querySelector('.slider');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const slides = document.querySelectorAll('.slide');
const slideParent = document.querySelector('.slider__wrapper');


// Switch menu
const onScroll = () => {
  let currentPos = window.scrollY;
  let elems = document.querySelectorAll('.content>div');
  let links = document.querySelectorAll('.nav__link');

  elems.forEach(el=> {
    if(el.offsetTop - 160 < currentPos) {
      links.forEach(link=> {
        link.classList.remove('active');
        if(el.getAttribute('id') === link.getAttribute('href').substring(1)) {
          link.classList.add('active');
        }
      })
    }
  })
}

document.addEventListener('scroll', onScroll);


// Switch tabs
portfolioBtns.addEventListener('click', (e)=> {
  let lastImage = portfolioBlock.lastElementChild;
  document.querySelectorAll('a').forEach(elem=> {
    elem.classList.remove('active');
  })
  if(e.target.tagName === 'A') {
    e.preventDefault();
    e.target.classList.add('active');
    lastImage.remove();
    portfolioBlock.insertAdjacentElement('afterbegin', lastImage);
  }
});


// Images interaction
portfolioBlock.addEventListener('click', (e)=> {
  if(e.target.classList.contains('portfolio__img')) {
    document.querySelectorAll('.portfolio__img').forEach(el=> {
      el.classList.remove('portfolio__img-active')
    });
    e.target.classList.add('portfolio__img-active');
  }
});


// Message popup
const showSentMessage = (e) => {
  if(name.value !== '' && email.value !== '') {
    e.preventDefault();
    let subject = document.querySelector('#form-subject').value;
    let describe = document.querySelector('#form-detail').value;
    setTimeout(() => {
      if(subject !== '') {
        document.getElementById('result-subject').innerText = 'Subject: ' + subject;
      } else {
        document.getElementById('result-subject').innerText = 'Without subject'
      }
    
      if(describe !== '') {
        document.getElementById('result-detail').innerText = 'Description: ' + describe;
      } else {
        document.getElementById('result-detail').innerText = 'Without description';
      }
      messageBlock.classList.remove('popup-hide');
      messageBlock.classList.remove('hidden');
      messageBlock.classList.add('popup-show');
    }, 500);
  }
}

// Hide Popup
const hidePopup = () => {
  setTimeout(() => {
    messageBlock.classList.remove('popup-show');
    messageBlock.classList.add('popup-hide');
    messageBlock.classList.add('hidden');
    document.querySelector('.form').reset();
  }, 500);
}

closeBtn.addEventListener('click', hidePopup);
formSubmit.addEventListener('click', showSentMessage);


// Screen activation
const showBlackoutVertical = () => {
  let toBottom = document.querySelector('.to-bottom');
  let toTop = document.querySelector('.to-top');
  toBottom.classList.toggle('to-bottom-active');
  toTop.classList.toggle('to-top-active');
  verticalBtn.classList.toggle('vertical-circle-active');
  return;
}

const showBlackoutHorizontal = () => {
  let toLeft = document.querySelector('.to-left');
  let toRight = document.querySelector('.to-right');
  toLeft.classList.toggle('to-left-active');
  toRight.classList.toggle('to-right-active');
  horizontalBtn.classList.toggle('horizontal-circle-active');
  return;
}


verticalBtn.addEventListener('click', showBlackoutVertical);
horizontalBtn.addEventListener('click', showBlackoutHorizontal);


// Slider
let slideDirection = 'prev' || 'next';

const previousSlide = ()=> {
  if(slideDirection == 'prev') {
    slideParent.prepend(slideParent.lastElementChild);
    slides.forEach(el=> {
      el.style.transition = 'none';
      el.style.left = '-100%';
    })
    setTimeout(() => {
      slides.forEach(el=> {
        el.style.transition = '0.5s';
        el.style.left = '0';
      })
    }, 50);
  } else {
    slides.forEach(el=> {
      el.style.left = '0';
    })
  }
  slider.classList.toggle('slider-active');
  slideDirection = 'prev';
}

const nextSlide = () => {
  if(slideDirection == 'next') {
    slideParent.append(slideParent.firstElementChild);
    slides.forEach(el=> {
      el.style.transition = 'none';
      el.style.left = '0';
    })
    setTimeout(() => {
      slides.forEach(el=> {
        el.style.left = '-100%';
        el.style.transition = '0.5s';
      })
    }, 50);
  } else {
    slides.forEach(el=> {
      el.style.left = '-100%';
    })
  }
  slider.classList.toggle('slider-active');
  slideDirection = 'next';
}


arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', previousSlide);


// BURGER MENU
const burgerMenu = document.querySelector('.burger');

const showBurgerMenu = () => {
  NAV.classList.toggle('header__nav-active');
  burgerMenu.classList.toggle('burger-active');
  document.querySelector('.header__logo').classList.toggle('header__logo-active');
}

const hideBurgerMenu = (e) => {
  if(e.target.tagName === 'A') {
    NAV.classList.remove('header__nav-active');
    burgerMenu.classList.remove('burger-active');
    document.querySelector('.header__logo').classList.remove('header__logo-active');
  }
}

NAV.addEventListener('click', hideBurgerMenu);
burgerMenu.addEventListener('click', showBurgerMenu);