const items = [...document.querySelectorAll('[data-anim-item]')];

const animItemsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const once = Boolean(entry.target.dataset.animItem);

    if (entry.isIntersecting) {
      return entry.target.classList.add('scrolled');
    }
    if (!once) {
      return entry.target.classList.remove('scrolled');
    }

    return undefined;
  });
});

items.forEach((item) => {
  animItemsObserver.observe(item);
});

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
