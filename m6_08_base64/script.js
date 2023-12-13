'use strict';

const file = document.querySelector('.file');
const preview = document.querySelector('.preview');
const form = document.querySelector('.form-input');


const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();

  reader.addEventListener('loadend', () => {
    resolve(reader.result);
  });

  reader.addEventListener('error', err => {
    reject(err);
  });

  reader.readAsDataURL(file);
});

// вставить на страницу и отправить на сервер
file.addEventListener('change', () => {
  if (file.files.length > 0) {
    const src = URL.createObjectURL(file.files[0]);
    // size размер в байтах
    console.log(file.files[0]);
    preview.src = src;
    preview.style.display = 'block';
  }
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);
  data.image = await toBase64(data.image);
  console.log(data);

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
});

// // вставить на страницу
// file.addEventListener('change', async () => {
//   if (file.files.length > 0) {
//     preview.style.display = 'block';
//     const result = await toBase64(file.files[0]);
//     preview.src = result;
//     console.log(result);
//   }
// });