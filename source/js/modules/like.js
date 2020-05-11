'use strict';

(function () {
  const heart = document.querySelectorAll('.like__btn');
  const likesNumber = document.querySelectorAll('.like__count');

  if (heart && likesNumber) {
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
  }

})();
