//* при вводе текста
//* живой поиск на сайте или в админке
//* фильтрация на сайте


const textInput = document.querySelector('.text__input');
const textShow = document.querySelector('.text__show');

const showText = () => {
  textShow.textContent = textInput.value;
};

const debounceTimer = (fn, msec) => {
  let lastCall = 0;
  let lastCallTimer = NaN;

  return (...args) => {
    const previousCall = lastCall;
    lastCall = Date.now();

    if (previousCall && ((lastCall - previousCall) <= msec)) {
      clearTimeout(lastCallTimer);
    }
    lastCallTimer = setTimeout(() => fn(...args), msec);
  };
};

const showTextDebounce = debounceTimer(showText, 300);

textInput.addEventListener('input', showTextDebounce);
