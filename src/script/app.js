const burgerOpenButton = document.querySelector('.navbar__burger-btn');
const burgerCloseButton = document.querySelector('.burger__close-btn');
const burger = document.querySelector('.burger');

burgerOpenButton.addEventListener('click', () => {
  burger.classList.add('active');
});

burgerCloseButton.addEventListener('click', () => {
  burger.classList.remove('active');
});

const fullImages = [...document.querySelectorAll('.view-btn')];
const imageViewer = document.querySelector('.image-viewer');
const imageViewerContainer = document.querySelector('.image-viewer__img');
const imageViewerCloseBtn = document.querySelector('.image-viewer__close-btn');

fullImages.forEach((image) => {
  image.addEventListener('click', (e) => {
    const src = e.target.closest('.full-image').querySelector('img').src.split('.');
    src.pop();

    imageViewerContainer.innerHTML = `<img src="${src.join('.')}.webp" alt='image'>`;
    imageViewer.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

imageViewerCloseBtn.addEventListener('click', () => {
  imageViewer.classList.remove('active');
  document.body.style.overflow = '';
});
