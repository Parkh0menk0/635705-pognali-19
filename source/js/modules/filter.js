'use strict';

(function () {
  const filter = document.querySelector('.filter');
  const btn = document.querySelector('.filter__expands');
  const btns = document.querySelectorAll('.filter__expand');
  const close = document.querySelector('.filter__collapse');
  var triggers = document.querySelectorAll('.letter__item');

  if (btn && btns && filter && close) {
    btn.addEventListener('click', function () {
      btn.classList.toggle('filter__expands--open');
      filter.classList.toggle('filter--open');
      if (btns[0].classList.contains('filter__expand--active')) {
        btns[0].classList.remove('filter__expand--active');
        btns[1].classList.add('filter__expand--active');
      } else {
        btns[1].classList.remove('filter__expand--active');
        btns[0].classList.add('filter__expand--active');
      }
    });

    close.addEventListener('click', function () {
      btn.classList.remove('filter__expands--open');
      filter.classList.remove('filter--open');
    });
  }

  if (triggers) {
    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var id = this.getAttribute('data-tab');
        var content = document.querySelector('.letter__countries[data-tab="' + id + '"]');
        var activeTrigger = document.querySelector('.letter__item--active');
        var activeContent = document.querySelector('.letter__countries--active');

        activeTrigger.classList.remove('letter__item--active');
        trigger.classList.add('letter__item--active');

        activeContent.classList.remove('letter__countries--active');
        content.classList.add('letter__countries--active');
      });
    });
  }

})();
