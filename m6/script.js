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

// ****************************************** setTimeout, setInterval

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

// ******************************************   таймер

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

// ******************************************   для перебора больших данных асинхронно

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


// ******************************************   m6l3
