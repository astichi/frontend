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


