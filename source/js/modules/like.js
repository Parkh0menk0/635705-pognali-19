'use strict';

(function () {
  var heart = document.querySelectorAll('.like__btn');
  var likesNumber = document.querySelectorAll('.like__count');

  if (heart && likesNumber) {
    for (var i = 0; i < heart.length; i++) {
      heart[i].addEventListener('click', function (e) {
        if (!isNaN(likesNumber[i].textContent)) {
          likesNumber[i].textContent = heart[i].classList.contains('like__btn--active') ? --likesNumber[i].textContent : ++likesNumber[i].textContent;
        }
        heart[i].classList.toggle('like__btn--active');
        var pressed = e.target.getAttribute('aria-pressed') === 'true';
        e.target.setAttribute('aria-pressed', String(!pressed));
      });
    }
  }

})();
