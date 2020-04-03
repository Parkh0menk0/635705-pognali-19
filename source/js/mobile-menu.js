'use strict';

var burger = document.querySelector('.main-nav__toggle');
var dropDown = document.querySelector('.drop-down');
var header = document.querySelector('.header');
var logo = document.querySelector('.header__logo img');

burger.addEventListener('click', function () {
  dropDown.classList.toggle('open');
  burger.classList.toggle('open');
  header.classList.toggle('open');
  logo.src = dropDown.classList.contains('open') ? 'img/logo/logo-mobile-blue@1x.png' : 'img/logo/logo-mobile-white@1x.png';
});
