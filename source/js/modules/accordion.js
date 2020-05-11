'use strict';

(function () {

  let form = document.querySelector('.traveler-filter__form');

  if (form) {
    let btn = form.querySelectorAll('.traveler-filter__legend');
    let panel = form.querySelectorAll('.traveler-filter__list');

    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', function (e) {
        e.preventDefault();
        btn[i].classList.toggle('traveler-filter__legend--open');
        panel[i].classList.toggle('traveler-filter__list--open');
      });
    }
  }

})();
