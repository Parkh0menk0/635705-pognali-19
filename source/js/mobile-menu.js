'use strict';

var burger = document.querySelector('.main-nav__toggle');
var dropDown = document.querySelector('.drop-down');
var header = document.querySelector('.header');
var logo = document.querySelector('.header__logo');

burger.addEventListener('click', function () {
  dropDown.classList.toggle('drop-down--open');
  burger.classList.toggle('main-nav__toggle--open');
  header.classList.toggle('header--open');
  logo.classList.toggle('logo--open');
});
