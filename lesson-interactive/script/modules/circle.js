const duration = 1500;
const distance = 500;
let requestId = NaN;

const circle = document.querySelector('.circle');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

const startAnimation = (duration, callback) => {
  let startAnimation = NaN;

  requestId = requestAnimationFrame(function step(timestamp) {
    startAnimation ||= timestamp;

    const progress = (timestamp - startAnimation) / duration;

    callback(progress);
    if (progress < 1) {
      requestId = requestAnimationFrame(step);
    }
  });
};

const easeInOut = time => 0.5 * (1 - Math.cos(Math.PI * time));

const elastic = (x, timeFraction) => Math.pow(2, 10 * (timeFraction - 1)) *
  Math.cos(20 * Math.PI * x / 3 * timeFraction);

const bounce = timeFraction => {
  for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) +
        Math.pow(b, 2);
    }
  }
};

start.addEventListener('click', () => {
  startAnimation(duration, (progress) => {
    const left = progress * distance;
    // const left = easeInOut(progress) * distance;
    // const left = elastic(1.5, progress) * distance;
    // const left = bounce(progress) * distance;
    circle.style.transform = `translate(${left}px)`;
  });
});

stop.addEventListener('click', () => {
  cancelAnimationFrame(requestId);
});

