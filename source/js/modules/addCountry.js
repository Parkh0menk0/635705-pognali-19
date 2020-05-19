'use strict';

(function () {

  const addCountry = document.querySelector('.select-menu');

  if (addCountry) {

    addCountry.classList.remove('visit__item--nojs');

    addCountry.addEventListener('click', function () {
      addCountry.classList.toggle('visit__item--open');
    });
  }

})();
