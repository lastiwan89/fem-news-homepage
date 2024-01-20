const menu = document.querySelector('.menu');
const menuBars = document.querySelector('.menu__bars');
const menuClose = document.querySelector('.menu__close');
const nav = document.querySelector('.nav__lists');
const header = document.querySelector('header');
const main = document.querySelector('main');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuBars.classList.toggle('active');
  menuClose.classList.toggle('active');
  nav.classList.toggle('active');
  header.classList.toggle('active');
  main.classList.toggle('active');
})

