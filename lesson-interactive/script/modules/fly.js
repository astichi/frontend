const docEl = document.documentElement;

const fly = document.createElement('div');

fly.style.cssText = `
  position: fixed;
  width: 50px;
  height: 50px;
  left: 0;
  top: 0;
  pointer-events: none;
  background: url('image/fly.svg') center/contain no-repeat;
`;

document.body.append(fly);

const calcPositionFly = () => {
  const maxLeft = docEl.scrollWidth - fly.clientWidth;
  const maxScroll = docEl.scrollHeight - docEl.clientHeight;
  const percentScroll = (window.scrollY * 100) / maxScroll;
  const leftPx = maxLeft * (percentScroll / 100);

  // fly.style.left = `${leftPx}px`;
  fly.style.transform = `translateX(${leftPx}px)`;
};

// window.addEventListener('scroll', calcPositionFly);
window.addEventListener('scroll', () => {
  requestAnimationFrame(calcPositionFly);
});

calcPositionFly();
