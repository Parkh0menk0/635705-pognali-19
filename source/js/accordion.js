'use strict';

(function () {
  let form = document.querySelector('.traveler-filter-form');
  let btn = form.querySelectorAll('.accordion__btn');
  let panel = form.querySelectorAll('.accordion__panel');

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function (e) {
      e.preventDefault();
      btn[i].classList.toggle('accordion__btn--open');
      panel[i].classList.toggle('accordion__panel--open');
    });
  }
})();
