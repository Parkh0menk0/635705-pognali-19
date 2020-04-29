'use strict';

(function () {

  var form = document.querySelector('.traveler-filter__form');

  if (form) {
    var btn = form.querySelectorAll('.accordion__btn');
    var panel = form.querySelectorAll('.accordion__panel');

    for (var i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', function (e) {
        e.preventDefault();
        btn[i].classList.toggle('accordion__btn--open');
        panel[i].classList.toggle('accordion__panel--open');
      });
    }
  }

})();
