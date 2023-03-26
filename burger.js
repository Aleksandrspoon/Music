const burger = document.querySelector('.nav__burger');
const menu = document.querySelector('.nav__menu');

burger.addEventListener('click', function() {
  menu.classList.toggle('menu__open');
});