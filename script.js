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
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

// Switch menu
NAV.addEventListener('click', (e)=> {
  document.querySelectorAll('a').forEach((elem)=> {
    elem.classList.remove('active');
  })
  e.target.classList.add('active');
});


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
    name.value = '';
    email.value = '';
    subject.value = '';
    describe.value = '';
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


// Slide switch
let currentSlide = 1;

const switchSlide = (s)=> {
  activeSlide(currentSlide += s);
}

const activeSlide = (s) => {
  let slider = document.querySelector('.slider');
  let allSlides = document.querySelectorAll('.slide');
  if(s > allSlides.length){currentSlide = 1};
  if(s < 1) {currentSlide = allSlides.length};
  if(currentSlide == 2) {
    slider.classList.add('slider-active');
    arrowLeft.classList.add('arrow-left-active');
    arrowRight.classList.add('arrow-right-active');
  } else {
    slider.classList.remove('slider-active');
    arrowLeft.classList.remove('arrow-left-active');
    arrowRight.classList.remove('arrow-right-active');
  }

  for(let i = 0; i < allSlides.length; i++) {
    allSlides[i].style.display = 'none';
  }

  allSlides[currentSlide - 1].style.display = 'flex';
};

activeSlide(currentSlide);
arrowLeft.addEventListener('click', () => {
  switchSlide(-1)
});

arrowRight.addEventListener('click', () => {
  switchSlide(1)
});