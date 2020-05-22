'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var modal = document.querySelector('.modal-rates');
  var link = document.querySelector('.rates__link');
  var modalClose = modal.querySelector('.modal-rates__btn');

  /**
   * Функция для закрытия окна формы по нажатии клавиши Esc.
   * @function
   * @param {Object} evt объект события;
   */
  function onEscPress(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closeModal();
    }
  }

  /**
   * Функция открытия окна формы.
   * @function
   */
  function openModal() {
    modal.classList.add('modal-rates--open');
    document.body.style.overflow = "hidden";

    document.addEventListener('keydown', onEscPress);
  }

  /**
   * Функция закрытия окна формы.
   * @function
   */
  function closeModal() {
    modal.classList.remove('modal-rates--open');
    document.body.style.overflow = "auto";
    document.removeEventListener('keydown', onEscPress);
  }

  if (link) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      openModal();
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', function (evt) {
      evt.preventDefault();
      closeModal();
    });
  }

})();
