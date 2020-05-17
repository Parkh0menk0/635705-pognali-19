'use strict';

(function () {

  const burger = document.querySelector('.main-nav__toggle');
  const nav = document.querySelector('.main-nav');

  if (burger && nav) {

    burger.addEventListener('click', function () {
      nav.classList.toggle('main-nav--open');
    });
  }

})();
