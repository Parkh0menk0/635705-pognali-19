'use strict';

(function () {

  const form = document.querySelector('.traveler-filter__form');

  if (form) {

    const btn = form.querySelectorAll('.traveler-filter__legend');

    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.remove('traveler-filter__legend--nojs');
      btn[i].addEventListener('click', function (e) {
        e.preventDefault();
        btn[i].classList.toggle('traveler-filter__legend--open');
      });
    }
  }

})();
