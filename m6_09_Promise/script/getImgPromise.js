const photos = [
  'https://loremflickr.com/400/400?1',
  'https://loremflickr.com/400/400?2',
  'https://loremflickr.com/400/400?3',
  'https://loremflickr.com/400/400?4',
  'https://loremflickr.com/400/400?5'];


const loadImg = url => new Promise((resolve) => {
  const img = new Image();
  img.width = 300;
  img.src = url;
  img.alt = 'image';

  img.addEventListener('load', () => {
    resolve(img);
  });
});

const showImage = () => {
  const img = [];
  for (let i = 0; i < photos.length; i++) {
    img.push(loadImg(photos[i]));
  }

  return Promise.all(img);
};

showImage().then(data => document.body.append(...data));

// const showImg = () => Promise.all([
//   loadImg(photos[0]),
//   loadImg(photos[1]),
//   loadImg(photos[2]),
//   loadImg(photos[3]),
//   loadImg(photos[4]),
// ]);

// showImg().then(data => document.body.append(...data));


// const img = [];
// img.push(await loadImg(photos[0]));
// img.push(await loadImg(photos[1]));
// img.push(await loadImg(photos[2]));
// img.push(await loadImg(photos[3]));
// img.push(await loadImg(photos[4]));
// document.body.append(...img);


// *******************************************

// const loadImg = url => new Promise((resolve) => {
//   const img = new Image();
//   img.width = 300;
//   img.src = url;
//   img.alt = 'image';

//   img.addEventListener('load', () => {
//     resolve();
//     document.body.append(img);
//   });
// });

// loadImg(photos[0])
//   .then(() => loadImg(photos[1]))
//   .then(() => loadImg(photos[2]))
//   .then(() => loadImg(photos[3]))
//   .then(() => loadImg(photos[4]));


// *******************************************
// console.log('start');
// const promise = new Promise((resolve, reject) => {
//   console.log('ожидание');
//   let timerBad = NaN;

//   const timerId = setTimeout(() => {
//     // console.log('готово');
//     clearTimeout(timerBad);
//     resolve('готово');
//   }, Math.floor(Math.random() * 5000));

//   timerBad = setTimeout(() => {
//     // console.log('ошибка');
//     clearTimeout(timerId);
//     reject(new Error('ошибка'));
//   }, 2000);
// });

// const result = promise
//   .then(data => {
//     console.log(data);
//     return data + ' text';
//   })
//   .then(data => {
//     console.log('2', data);
//     return data;
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .then(data => {
//     console.log('ещё один then');
//     return data;
//   })
//   .finally(() => console.log('finally'))
//   .then(data => console.log('last', data));

// promise.then(data => console.log(data, 'feedback 1'));
// promise.then(data => console.log(data, 'feedback 2'));
// promise.then(data => console.log(data, 'feedback 3'));

// // разные промисы
// console.log(promise);
// console.log(result);
// // promise.then((data) => {
// //   console.log(data);
// // }, (err) => {
// //   console.error(err);
// // });
