const NAV = document.querySelector('.header__nav');

NAV.addEventListener('click', (e)=> {
  document.querySelectorAll('a').forEach((elem)=> {
    elem.classList.remove('active')
  })
  e.target.classList.add('active');
})