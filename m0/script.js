'use strict';

// const container = document.querySelector('.container');

// const complete = e => {
//   const target = e.target;
//   if (target.closest('.complete')) {
//     target.innerText = 'Возобновить';
//     target.className = 'reopen';
//   }

//   container.addEventListener('click', reopen);
//   container.removeEventListener('click', complete);
// };

// const reopen = e => {
//   const target = e.target;
//   if (target.closest('.reopen')) {
//     target.innerText = 'Завершить';
//     target.className = 'complete';
//   }

//   container.addEventListener('click', complete);
//   container.removeEventListener('click', reopen);
// };

// container.addEventListener('click', complete);

// *************************************************

// const arr = [
//   {
//     id: 111,
//     animal: 'panter',
//     age: 1,
//   },
//   {
//     id: 222,
//     animal: 'tiger',
//     age: 2,
//   },
//   {
//     id: 333,
//     animal: 'lion',
//     age: 3,
//   }
// ];

// const foo = (id, animal, age) => {
//   // if (animal) {
//   //   arr.map(item => (item.id === id ? item.animal = animal : []));
//   // }

//   // if (age) {
//   //   arr.map(item => (item.id === id ? item.age = age : []));
//   // }

//   // console.log(arr);

//   const newArr = arr.map(item => (item.id === id ? {...item, animal, age} : item));
//   console.log(newArr);
// };

// // foo(333, 'cat', 4);
// foo(333, 'cat');
// foo(333, 4);


// *************************************************

const trigger = document.querySelector('button')
const hint = document.querySelector('div')

let hideTimeoutId = null

trigger.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeoutId)
  hint.hidden = false
})

trigger.addEventListener('mouseleave', () => {
  hideTimeoutId = setTimeout(() => {
    hint.hidden = true
  }, 1000)
})

// const greeting = delay =>
//   setTimeout(() => {
//     console.log('Hello World. ' + delay);
//     greeting(delay + 1);
//   }, delay * 1000);
// greeting(1);


let lastIntervalId, counter = 5;
const greeting = delay => {
  if (counter === 5) {
    clearInterval(lastIntervalId);
    lastIntervalId = setInterval(() => {
      console.log('Hello World. ', delay);
      greeting(delay + 100);
    }, delay);
    counter = 0;
  }
counter += 1;
};
greeting(100);