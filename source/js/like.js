'use strict';

(function () {
  let heart = document.querySelectorAll('.like__btn');
  let likesNumber = document.querySelectorAll('.like__count');

  for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener('click', function (e) {
      if (!isNaN(likesNumber[i].textContent)) {
        likesNumber[i].textContent = heart[i].classList.contains('like__btn--active') ? --likesNumber[i].textContent : ++likesNumber[i].textContent;
      }
      heart[i].classList.toggle('like__btn--active');
      let pressed = e.target.getAttribute('aria-pressed') === 'true';
      e.target.setAttribute('aria-pressed', String(!pressed));
    });
  }
})();
