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
      window.scrollY > itemOffset - itemPoint && window.scrollY < itemOffset + itemHeight
    ) {
      item.classList.add('scrolled');
    } else if (!item.classList.contains('anim-once')) {
      item.classList.remove('scrolled');
    }
  });
}

if (items.length > 0) {
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();
}

function animateStatisticsDigits() {
  function digitsCountersAnimate(digitsCounter) {
    let startTimestamp = null;
    const duration = parseFloat(digitsCounter.dataset.digitsCounter, 10)
      ? parseFloat(digitsCounter.dataset.digitsCounter, 10)
      : 1000;
    const startValue = parseFloat(digitsCounter.dataset.maxValue, 10)
    || parseFloat(digitsCounter.innerHTML);

    const startPosition = 0;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      if (progress === 1 && Math.floor(progress * (startPosition + startValue)) !== startValue) {
        // eslint-disable-next-line no-param-reassign
        digitsCounter.innerHTML = startValue;
      } else {
        // eslint-disable-next-line no-param-reassign
        digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  function digitsCountersInit(digitsCountersItems) {
    const digitsCounters = digitsCountersItems || document.querySelectorAll('[data-digits-counter]');

    if (digitsCounters) {
      digitsCounters.forEach((digitsCounter) => {
        digitsCountersAnimate(digitsCounter);
      });
    }
  }

  const options = {
    threshold: 0.3,
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetElement = entry.target;
        const digitsCountersItems = targetElement.querySelectorAll('[ data-digits-counter]');
        if (digitsCountersItems.length) {
          digitsCountersInit(digitsCountersItems);
        }
      }
    });
  }, options);

  const sections = document.querySelectorAll('.digits-container');
  if (sections.length) {
    sections.forEach((section) => {
      observer.observe(section);
    });
  }
}
window.addEventListener('load', animateStatisticsDigits);
