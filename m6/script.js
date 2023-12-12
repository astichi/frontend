'use strict';

// ******************************************   m6l1

// const container = document.querySelector('.container');
// container.dataset.pic = './test.jpg';
// const btn = document.querySelector('.open');
// btn.addEventListener('click', () => {
//   open(container.dataset.pic, 'test', `width=600,height=600,left=${window.screen.width / 2 - 300},top=${window.screen.height / 2 - 300}`);
//   // const positionX = (window.screen.width / 2) - 300;
//   // const positionY = (window.screen.height / 2) - 300;
//   // wndw.moveTo(positionX, positionY);

//   // // const img = document.createElement('img');
//   // // img.src = container.dataset.pic;
//   // // wndw.document.body.append(img);
//   // wndw.document.body.innerHTML = `
//   // <div style="height: 100vh; display: flex; align-items: center; justify-content: center">
//   //   <img src="${container.dataset.pic}" alt="тестовое изображение">
//   // </div>
//   // `;
// });

// const button = document.querySelector('.open');
// button.addEventListener('click', () => {
//   const win = open('about:blank', 'test', `width=300,height=300,left=${window.screen.width / 2 - 150},top=${window.screen.height / 2 - 150}`);
//   const btn = document.createElement('button');
//   btn.textContent = 'click';
//   win.document.body.innerHTML = `
//     <h1>Hello!</h1>
//   `;
//   win.document.body.append(btn);

//   btn.addEventListener('click', () => {
//     // win.moveTo(100, 100);
//     // win.moveBy(100, 100);

//     // win.close();

//     // win.resizeTo(200,200);
//     // win.resizeBy(-50, -50);
//   });

// });

// ******************************************   m6l2

// console.log(Date());
// console.dir(new Date());

// console.log(new Date(2023));
// console.log(new Date(2023, 2));
// console.log(new Date(2023, 2, 25));
// console.log(new Date(2023, 2, 25, 10));
// console.log(new Date(2023, 2, 25, 10, 31).getTime());
// console.log(new Date(2023, 2, 25, 10, 31, 4));
// console.log(new Date(1654789457888));
// console.log(new Date('November 12 2023 11:54:33'));
// console.log(new Date('11:54:33 1234 November 12').getTime());
// console.log(Date.now());
// console.log(Date.parse('November 12 2023'));

// const date = new Date();

// console.log(+date);
// console.log(date.getTime());
// console.log(new Date().getTime());
// console.log(new Date('November 12 2023 11:54:33').getTime());
// console.log(date.valueOf());
// console.log(date.getTimezoneOffset());

// console.table({
//   'число месяца': date.getDate(),
//   'день недели (0 - воскресенье)': date.getDay(),
//   'год': date.getFullYear(),
//   'год (устаревшее)': date.getYear(),
//   'месяц': date.getMonth(),
//   'час': date.getHours(),
//   'час (UTC)': date.getUTCHours(),
//   'минута': date.getMinutes(),
//   'секунда': date.getSeconds(),
//   'миллисекунда': date.getMilliseconds(),
// });

// // date.setDate(8);
// // date.setFullYear(2025);
// // date.setMonth(0);
// // date.setHours(3);
// // date.setMinutes(14);
// // date.setSeconds(11);
// // date.setMilliseconds(6);

// // date.setMonth(date.getMonth() + 6);
// // console.log(date);

// console.log(date.toLocaleString('ru'));
// console.log(date.toLocaleString('en'));
// console.log(date.toLocaleString('fr'));
// console.log(date.toLocaleString('ja'));

// console.log(date.toLocaleDateString('ru'));
// console.log(date.toLocaleTimeString('ru'));

// const option = {
//   // timeZone: 'Europe/Kaliningrad',
//   timeZone: 'Asia/Omsk',
//   weekday: 'long',
//   day: 'numeric',
//   month: 'short',
//   year: 'numeric',
//   hour: '2-digit',
//   minute: '2-digit',
// };

// console.log(date.toLocaleString('ru', option));
// console.log(date.toLocaleString('en', option));
// console.log(date.toLocaleString('fr', option));
// console.log(date.toLocaleString('ja', option));

// const start = Date.now();

// for (let i = 0; i < 100000; i++) {
//   const doSomething = i * i * i;
// }

// const end = Date.now();
// console.log(end - start);

//  ? ****************************************** setTimeout, setInterval

// const n1 = setTimeout(() => {
//   console.log('Hello!');
// }, 2000);
// console.log(n1);

// const n2 = setTimeout((str) => {
//   console.log(str);
//   clearTimeout(n1);
// }, 1000, 'Hi!');
// console.log(n2);
// // clearTimeout(n2);

// const n3 = setInterval((str) => {
//   console.log(str);
// }, 1000, 'interval');
// setTimeout(() => {
//   clearInterval(n3);
// }, 4000);

// let count = 0;
// let timerId = setTimeout(function tick() {
//   count++;
//   console.log('timer', count);
//   if (count < 2) {
//     setTimeout(tick, 3000);
//   } else if (count < 4) {
//     setTimeout(tick, 2000);
//   } else if (count < 8) {
//     setTimeout(tick, 1000);
//   }
// });     // }, 0);


// const tick = tick => {
//   console.log('tick: ', tick);
// };
// setTimeout(tick, 3000, 3);
// setTimeout(tick, 2000, 2);
// setTimeout(tick, 1000, 1);
// const webApi = [
//   {
//     cb: tick,
//     delay: 3000,
//     time: Date.now(),
//   },
//   {
//     cb: tick,
//     delay: 2000,
//     time: Date.now(),
//   },
//   {
//     cb: tick,
//     delay: 1000,
//     time: Date.now(),
//   }
// ];
// const queue = ['tick1', 'tick2', 'tick3'];

// ? ******************************************   таймер

// const timer = deadline => {
//   const timerBlockHour = document.querySelector('.timer__block-hour');
//   const timerBlockMin = document.querySelector('.timer__block-min');
//   const timerBlockSec = document.querySelector('.timer__block-sec');
//   // const timerBlock = document.querySelector('.timer');

//   const getTimeRemaining = () => {
//     const dateStop = new Date(deadline).getTime();
//     const dateNow = Date.now();
//     const timeRemaining = dateStop - dateNow;

//     // console.log(timeRemaining / 1000); // seconds
//     // console.log(timeRemaining / 1000 / 60); // minutes
//     // console.log(timeRemaining / 1000 / 60 / 60); // hours

//     // console.log(Math.floor(timeRemaining / 1000 % 60));
//     // console.log(Math.floor(timeRemaining / 1000 / 60 % 60));
//     // console.log(Math.floor(timeRemaining / 1000  / 60 / 60 % 24));

//     const seconds = Math.floor(timeRemaining / 1000 % 60);
//     const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
//     const hours = Math.floor(timeRemaining / 1000  / 60 / 60 % 24);

//     return {
//       timeRemaining,
//       seconds,
//       minutes,
//       hours,
//     };
//   };

//   const start = () => {
//     const timer = getTimeRemaining();

//     timerBlockHour.textContent = timer.hours;
//     timerBlockMin.textContent = timer.minutes;
//     timerBlockSec.textContent = timer.seconds;

//     const intervalId = setTimeout(start, 1000);

//     if (timer.timeRemaining <= 0) {
//       clearTimeout(intervalId);

//       timerBlockHour.textContent = '00';
//       timerBlockMin.textContent = '00';
//       timerBlockSec.textContent = '00';

//       // timerBlock.style.display = 'none';
//     }
//   };

//   start();
// };

// timer('2023/11/15 17:00');

// ? ******************************************   для перебора больших данных асинхронно

// const tech1 = ['JS', 'React', 'TS'];
// tech1.forEach(tech => {
//   console.log('forEach', tech);
// });

// const tech2 = ['JS', 'React', 'TS'];
// const eacher2 = (arr, callback) => {
//   for (const item of arr) {
//     callback(item);
//   }
// };
// eacher2(tech2, tech => {
//   console.log('eacher2', tech);
// });
// eacher2(tech2, tech => {
//   console.log('eacher22', tech);
// });

// const tech3 = ['JS', 'React', 'TS'];
// const eacher3 = (arr, callback) => {
//   let count = 0;
//   const id = setInterval(() => {
//     callback(arr[count++]);
//     if (count >= arr.length) clearInterval(id);
//   });
// };
// eacher3(tech3, tech => {
//   console.log('eacher3', tech);
// });
// eacher3(tech3, tech => {
//   console.log('eacher33', tech);
// });
// eacher3(tech3, tech => {
//   console.log('eacher333', tech);
// });


// // самый оптимальный вариант
// const tech3 = ['JS', 'React', 'TS'];
// const eacher3 = (arr, callback) => {
//   let count = 0;
//   setTimeout(function eacherTimer() {
//     callback(arr[count++]);
//     if (count < arr.length) {
//       setTimeout(eacherTimer);
//     }
//   });
// };
// eacher3(tech3, tech => {
//   console.log('eacher3', tech);
// });
// eacher3(tech3, tech => {
//   console.log('eacher33', tech);
// });
// eacher3(tech3, tech => {
//   console.log('eacher333', tech);
// });


// ******************************************   m6l5

// fetch('http://localhost:3000/api/goods');
// fetch('http://localhost:3000/api/goods/1732512010');

// fetch('http://localhost:3000/api/goods', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'Banana',
//     description: 'some text',
//     category: 'fruits',
//     price: 150,
//     units: 'kg',
//     count: 3,
//   }),
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });
// 9852990351


// fetch('http://localhost:3000/api/goods/9852990351', {
//   method: 'DELETE'
// });
// fetch('http://localhost:3000/api/goods/9852990351');

// fetch('http://localhost:3000/api/goods', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'Banana',
//     description: 'some text',
//     category: 'fruits',
//     price: 150,
//     units: 'kg',
//     count: 3,
//   }),
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });

// fetch('http://localhost:3000/api/goods/5829638087', {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'Banana',
//     description: 'some text, some text, some text',
//     price: 200,
//     count: 8,
//     discount: 14,
//   }),
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });

// fetch('http://localhost:3000/api/goods', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'Orange',
//     description: 'some text',
//     category: 'fruits',
//     price: 90,
//     units: 'kg',
//     count: 7,
//     discount: 5,
//   }),
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });

// fetch('http://localhost:3000/api/goods/discount');
// fetch('http://localhost:3000/api/goods/category/fruits');
// fetch('http://localhost:3000/api/categories');
// fetch('http://localhost:3000/api/total');

// ? ****************************************************** fetch

// const result = fetch('http://localhost:3000/api/goods');
// console.log(result);
// const loadGoods = async () => {
//   const result = await fetch('http://localhost:3000/api/goods');
//   console.log(result);

//   const data = await result.json();
//   console.log(data);
// };
// loadGoods();


// const loadGoods = async (callback) => {
//   const result = await fetch('http://localhost:3000/api/goods');


//   const data = await result.json();
//   console.log(data);

//   callback(data);
// };

// const renderGoods = (data) => {
//   const cardWrapper = document.createElement('div');

//   const goods = data.goods.map(item => {
//     const card = document.createElement('div');
//     card.style.border = '1px solid blue';
//     card.innerHTML = `
//       <h2>${item.title}</h2>
//       <br>
//       <p>Price: ${item.price}</p>
//       <br>
//       <p>${item.description}</p>
//     `;

//     return card;
//   });

//   cardWrapper.append(...goods);
//   document.body.append(cardWrapper);
// };

// loadGoods(renderGoods);



// const loadGoods = async (callback) => {
//   const result = await fetch('http://localhost:3000/api/goods');


//   const data = await result.json();

//   return data;
// };

// const renderGoods = async () => {
//   const data = await loadGoods();
//   const cardWrapper = document.createElement('div');

//   const goods = data.goods.map(item => {
//     const card = document.createElement('div');
//     card.style.border = '1px solid blue';
//     card.innerHTML = `
//       <h2>${item.title}</h2>
//       <br>
//       <p>Price: ${item.price}</p>
//       <br>
//       <p>${item.description}</p>
//     `;

//     return card;
//   });

//   cardWrapper.append(...goods);
//   document.body.append(cardWrapper);
// };

// renderGoods();


// ******************************************   m6l6   XMLHttpRequest

// const loadGoods = (callback) => {
//   const xhr = new XMLHttpRequest();
//   console.log(xhr);
//   xhr.open('GET', 'http://localhost:3000/api/goods');

//   xhr.addEventListener('load', () => {
//     console.log('load');
//     const data = JSON.parse(xhr.response);
//     callback(data);
//   });

//   xhr.addEventListener('error', () => {
//     console.log('error');
//   });

//   xhr.send();
// };


// const renderGoods = (data) => {
//   const cardWrapper = document.createElement('div');

//   const goods = data.goods.map(item => {
//     const card = document.createElement('div');
//     card.style.border = '1px solid blue';
//     card.innerHTML = `
//       <h2>${item.title}</h2>
//       <br>
//       <p>Price: ${item.price}</p>
//       <br>
//       <p>${item.description}</p>
//     `;

//     return card;
//   });

//   cardWrapper.append(...goods);
//   document.body.append(cardWrapper);
// };

// const getBtn = document.querySelector('.get');
// getBtn.addEventListener('click', () => {
//   loadGoods(renderGoods);
// });

//////////////////////////////////////////////

// const sendData = (body, callback) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');

//   xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
//   xhr.addEventListener('load', () => {
//     const data = JSON.parse(xhr.response);
//     callback(data);
//   });

//   xhr.addEventListener('error', () => {
//     console.log('error');
//   });

//   xhr.send(JSON.stringify(body));
// };

// const form = document.querySelector('#form');
// form.addEventListener('submit', e => {
//   e.preventDefault();

//   sendData({
//     title: form.title.value,
//     body: form.description.value,
//   }, (data) => {
//     form.textContent = `ID: ${data.id}`;
//   });
// });

// ? ************************** XMLHttpRequest универсальная ф-я, обработка ошибок

// const URL = 'http://localhost:3000/api/goods';

// const httpRequest = (url, {
//   method = 'GET',
//   callback,
//   body = {},
//   headers,
// }) => {
//   try {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
  
//     if (headers) {
//       for (const [key, value] of Object.entries(headers)) {
//         xhr.setRequestHeader(key, value);
//       }
//     }
  
//     xhr.addEventListener('load', () => {
//       if (xhr.status < 200 || xhr.status >= 300) {
//         callback(new Error(xhr.status), xhr.response);
//         return;
//       }

//       const data = JSON.parse(xhr.response);
//       if (callback) callback(null, data);
//     });
  
//     xhr.addEventListener('error', () => {
//       callback(new Error(xhr.status), xhr.response);
//     });
  
//     xhr.send(JSON.stringify(body));
//   } catch (err) {
//     callback(new Error(err));
//   }
// };

// const renderGoods = (err, data) => {
//   if (err) {
//     console.warn(err, data);
//     const h2 = document.createElement('h2');
//     h2.style.color = 'red';
//     h2.textContent = data ? JSON.parse(data).message : err;
//     document.body.append(h2);
//     return;
//   }

//   const cardWrapper = document.createElement('div');

//   const goods = data.goods.map(item => {
//     const card = document.createElement('div');
//     card.style.border = '1px solid blue';
//     card.innerHTML = `
//       <h2>${item.title}</h2>
//       <br>
//       <p>Price: ${item.price}</p>
//       <br>
//       <p>${item.description}</p>
//     `;

//     return card;
//   });

//   cardWrapper.append(...goods);
//   document.body.append(cardWrapper);
// };

// const getBtn = document.querySelector('.get');
// getBtn.addEventListener('click', () => {
//   httpRequest(URL, {
//     method: 'GET',
//     callback: renderGoods,
//   });
// });

// ///////////////////////////////////////////////

// const form = document.querySelector('#form');
// form.addEventListener('submit', e => {
//   e.preventDefault();

//   httpRequest('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: {
//       title: form.title.value,
//       body: form.description.value,
//     },
//     callback(err, data) {
//       console.warn(err, data);
//       if (err) {
//         form.textContent = err;
//       }
//       form.textContent = `ID: ${data.id}`;
//     },
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// });


// ? ************************** fetch универсальная ф-я, обработка ошибок

// const URL = 'http://localhost:3000/api/goods/123';
// const URL = 'http://principled-iced-confidence.glitch.me/';

// const fetchRequest = async (url, {
//   method = 'GET',
//   callback,
//   body,
//   headers,
// }) => {
//   try {
//     const options = {
//       method,
//     };

//     if (body) options.body = JSON.stringify(body);
//     if (headers) options.headers = headers;

//     const response = await fetch(url, options);

//     if (response.ok) {
//       const data = await response.json();
//       if (callback) callback(null, data);
//       return;
//     }

//     const data = await response.json();
//     console.log(data.message);
//     // throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
//     // throw new Error(data.message ? data.message : `Ошибка ${response.status}: ${response.statusText}`);
//     throw new Error(data.message ? data.message : '');
//   } catch (err) {
//     console.log(err.message);
//     console.log(err.name);
//     callback(err);
//   }
// };

// const renderGoods = (err, data) => {
//   if (err) {
//     if (err.name !== 'Error') {
//       console.warn(err, data);
//       const h2 = document.createElement('h2');
//       h2.style.color = 'red';
//       h2.textContent = 'something wrong';
//       document.body.append(h2);
//       return;
//     }
//     if (err.message) {
//       console.warn(err, data);
//       const h2 = document.createElement('h2');
//       h2.style.color = 'red';
//       h2.textContent = err.message;
//       document.body.append(h2);
//       return;
//     } else if (!err.message) {
//       console.warn(err, data);
//       const h2 = document.createElement('h2');
//       h2.style.color = 'red';
//       h2.textContent = 'something wrong';
//       document.body.append(h2);
//       return;
//     }
//   }

//   const cardWrapper = document.createElement('div');

//   const goods = data.goods.map(item => {
//     const card = document.createElement('div');
//     card.style.border = '1px solid blue';
//     card.innerHTML = `
//       <h2>${item.title}</h2>
//       <br>
//       <p>Price: ${item.price}</p>
//       <br>
//       <p>${item.description}</p>
//     `;

//     return card;
//   });

//   cardWrapper.append(...goods);
//   document.body.append(cardWrapper);
// };

// const getBtn = document.querySelector('.get');
// getBtn.addEventListener('click', () => {
//   fetchRequest(`${URL}api/goods`, {
//     method: 'GET',
//     callback: renderGoods,
//   });
// });

// ///////////////////////////////////////////////

// const form = document.querySelector('#form');
// form.addEventListener('submit', e => {
//   e.preventDefault();

//   fetchRequest('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: {
//       title: form.title.value,
//       body: form.description.value,
//     },
//     callback(err, data) {
//       console.warn(err, data);
//       if (err) {
//         form.textContent = err;
//       }
//       form.textContent = `ID: ${data.id}`;
//     },
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// });


// ******************************************   m6l7  fetch возврат значения, preload

import showModal from './modal.js';

const URL = 'http://principled-iced-confidence.glitch.me/api/goods';

const fetchRequest = async (url, {
  method = 'GET',
  callback,
  body,
  headers,
}) => {
  try {
    const options = {
      method,
    };

    if (body) options.body = JSON.stringify(body);
    if (headers) options.headers = headers;

    const response = await fetch(url, options);

    if (response.ok) {
      const data = await response.json();
      if (callback) return callback(null, data);
      return;
    }

    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
  } catch (err) {
    return callback(err);
  }
};

const renderGoods = (err, data) => {
  if (err) {
    if (err.name !== 'Error') {
      console.warn(err, data);
      const h2 = document.createElement('h2');
      h2.style.color = 'red';
      h2.textContent = 'something wrong';
      document.body.append(h2);
      return;
    }
    if (err.message) {
      console.warn(err, data);
      const h2 = document.createElement('h2');
      h2.style.color = 'red';
      h2.textContent = err.message;
      document.body.append(h2);
      return;
    } else if (!err.message) {
      console.warn(err, data);
      const h2 = document.createElement('h2');
      h2.style.color = 'red';
      h2.textContent = 'something wrong';
      document.body.append(h2);
      return;
    }
  }

  const cardWrapper = document.createElement('div');

  const goods = data.goods.map(item => {
    const card = document.createElement('div');
    card.style.border = '1px solid blue';
    card.innerHTML = `
      <h2>${item.title}</h2>
      <br>
      <p>Price: ${item.price}</p>
      <br>
      <p>${item.description}</p>
      <button type="button" class="details" data-id="${item.id}">Details</button>
    `;

    return card;
  });

  cardWrapper.append(...goods);
  cardWrapper.addEventListener('click', ({target}) => {
    if (target.classList.contains('details')) {
      fetchRequest(`${URL}/${target.dataset.id}`, {
        callback: showModal,
      });
    }
  });

  document.body.append(cardWrapper);
  // getBtn.classList.remove('get-active');
  return true;
};

const getBtn = document.querySelector('.get');
getBtn.addEventListener('click', async () => {
  getBtn.classList.add('get-active');
  const result = await fetchRequest(`${URL}`, {
    method: 'GET',
    callback: renderGoods,
  });

  if (result) {
    getBtn.classList.remove('get-active');
  }
  console.log(result);
});
