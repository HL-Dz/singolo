const NAV = document.querySelector('.header__nav');
const portfolioBtns = document.querySelector('ul.buttons');
const portfolioBlock = document.querySelector('.portfolio__images');


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