'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnFormSubmit = document.querySelector('.modal__btn');
const btnCloseModal = document.querySelector('.btn--close-modal');
const buttonsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const featuresSect = document.querySelector('#features');

const allNavLinks = [
  document.querySelector('.nav'),
  document.querySelector('.footer__nav'),
];

// Modal window
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

// Button scroll to
btnScrollTo.addEventListener('click', () =>
  featuresSect.scrollIntoView({ behavior: 'smooth' })
);

// Smooth scrolling
allNavLinks.forEach(el =>
  el.addEventListener('click', function (e) {
    e.preventDefault();

    if (
      e.target.classList.contains('nav__logo') ||
      e.target.classList.contains('nav__link') ||
      e.target.classList.contains('footer__link')
    ) {
      const idSection = e.target.getAttribute('href');

      if (idSection && idSection !== '#')
        document
          .querySelector(idSection)
          .scrollIntoView({ behavior: 'smooth' });
      else if (!e.target.classList.contains('btn--show-modal'))
        document.body.scrollIntoView({ behavior: 'smooth' });
    }
  })
);

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab--container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('button');
  if (!clicked) return;

  const curActiveTab = document.querySelector('.operations__tab--active');
  const curActiveContent = document.querySelector(
    '.operations__content--active'
  );

  if (!clicked.classList.contains('operations__tab--active')) {
    clicked.classList.add('operations__tab--active');
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active');

    curActiveTab.classList.remove('operations__tab--active');
    curActiveContent.classList.remove('operations__content--active');
  }
});
