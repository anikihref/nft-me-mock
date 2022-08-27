const watchVideoBtn = document.querySelector('.header__watch-btn');

watchVideoBtn.addEventListener('mouseover', () => {
  watchVideoBtn.classList.remove('out');
  watchVideoBtn.classList.add('in');
});

watchVideoBtn.addEventListener('mouseleave', () => {
  watchVideoBtn.classList.add('out');
  watchVideoBtn.classList.remove('in');
});
