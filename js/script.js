'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnFormSubmit = document.querySelector('.modal__btn');
const btnCloseModal = document.querySelector('.btn--close-modal');
const buttonsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnFormSubmit.addEventListener('click', e => e.preventDefault());

buttonsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

overlay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);
