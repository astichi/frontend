'use strict';

const input = document.createElement('input');
const p = document.createElement('p');
const button = document.createElement('button');

button.textContent = 'сохранить';
document.body.append(input, p, button);

button.addEventListener('click', () => {
  setTimeout(() => {
    p.textContent = input.value;
  }, 300);
});

// input.addEventListener('change', () => {
//   setTimeout(() => {
//     p.textContent = input.value;
//   }, 300);
// });