const items = [...document.querySelectorAll('.anim-item')];

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

function animateOnScroll() {
  items.forEach((item) => {
    const itemHeight = item.offsetHeight;
    const itemOffset = getOffset(item).top;
    const animationStart = 4;

    let itemPoint = window.innerHeight - itemHeight / animationStart;

    if (itemHeight > window.innerHeight) {
      itemPoint = window.innerHeight - window.innerHeight / animationStart;
    }

    if (
      window.scrollY > itemOffset - itemPoint
      && window.scrollY < itemOffset + itemHeight
    ) {
      item.classList.add('scrolled');
    } else {
      item.classList.remove('scrolled');
    }
  });
}

if (items.length > 0) {
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();
}
