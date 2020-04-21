'use strict';

(function () {
  let btn = document.querySelector('.filter__expand');
  let worldPart = document.querySelector('.filter__world-part');
  let panel = document.querySelector('.filter__content');
  let close = document.querySelector('.filter__collapse');

  btn.addEventListener('click', function () {
    btn.classList.toggle('filter__expand--open');
    worldPart.classList.toggle('filter__world-part--open');
    panel.classList.toggle('filter__content--open');
  });

  close.addEventListener('click', function () {
    btn.classList.remove('filter__expand--open');
    worldPart.classList.remove('filter__world-part--open');
    panel.classList.remove('filter__content--open');
  });
})();
