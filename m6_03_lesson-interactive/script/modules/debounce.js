//* паттерн debounce
//* не даст вызываться ф-и чаще, чем requestAnimationFrame может сработать
//* анимации при наведении, canvas, игры

// let count = 0;

// const debounce = (fn) => {
//   let raf = NaN;

//   return (...args) => {
//     if (raf) return;

//     raf = requestAnimationFrame(() => {
//       fn(...args);
//       raf = NaN;
//     });
//   };
// };

let count = 0;
let count2 = 0;

const debounce = (fn, raf = NaN) => (...args) => {
  console.log('count2', count2++);
  if (raf) return;

  raf = requestAnimationFrame(() => {
    fn(...args);
    raf = NaN;
  });
};

const handle = () => {
  console.log(count++);
};

const debounceHandle = debounce(handle);

const circle = document.querySelector('.circle');
circle.addEventListener('mousemove', debounceHandle);
