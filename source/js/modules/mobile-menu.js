'use strict';

(function () {

  const header = document.querySelector('.header');
  const nav = document.querySelector('.main-nav');
  const burger = document.querySelector('.main-nav__toggle');
  const panel = document.querySelector('.main-nav__fixed');

  if (header && nav && burger) {

    header.classList.remove('header--nojs');
    nav.classList.remove('main-nav--nojs');

    burger.addEventListener('click', function () {
      nav.classList.toggle('main-nav--open');
    });

    window.addEventListener('scroll', function () {
      if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        panel.classList.remove("main-nav__fixed--no-scroll");
        panel.classList.add("main-nav__fixed--scroll");
      }
      else {
        panel.classList.remove("main-nav__fixed--scroll");
        panel.classList.add("main-nav__fixed--no-scroll");
      }
    });
  }

})();
