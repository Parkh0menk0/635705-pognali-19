'use strict';

(function () {

  const burger = document.querySelector('.main-nav__toggle');

  if (burger) {
    const dropDown = document.querySelector('.drop-down');
    const header = document.querySelector('.header');
    const logo = document.querySelector('.header__logo');

    burger.addEventListener('click', function () {
      dropDown.classList.toggle('drop-down--open');
      burger.classList.toggle('main-nav__toggle--open');
      header.classList.toggle('header--open');
      logo.classList.toggle('logo--open');
    });
  }

})();
