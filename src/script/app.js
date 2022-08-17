const burgerOpenButton = document.querySelector('.navbar__burger-btn');
const burgerCloseButton = document.querySelector('.burger__close-btn');
const burger = document.querySelector('.burger');

burgerOpenButton.addEventListener('click', () => {
  burger.classList.add('active');
});

burgerCloseButton.addEventListener('click', () => {
  burger.classList.remove('active');
});
