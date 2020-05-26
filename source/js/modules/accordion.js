'use strict';

(function () {

  const form = document.querySelector('.traveler-filter__form');

  if (form) {

    const btn = form.querySelectorAll('.traveler-filter__legend');

    btn.classList.remove('traveler-filter__legend--nojs');

    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', function (e) {
        e.preventDefault();
        btn[i].classList.toggle('traveler-filter__legend--open');
      });
    }
  }

})();
