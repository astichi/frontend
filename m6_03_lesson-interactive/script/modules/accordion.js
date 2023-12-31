const items = document.querySelectorAll('.item');
const buttons = document.querySelectorAll('.item__title');
const textWrapper = document.querySelectorAll('.item__text-wrapper');

let heightWrapper = 0;

textWrapper.forEach(elem => {
  if (heightWrapper < elem.scrollHeight) {
    heightWrapper = elem.scrollHeight;
  }
});

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    for (let i = 0; i < items.length; i++) {
      if (index === i) {
        textWrapper[i].style.height =
          items[i].classList.contains('item_active') ?
            '' : `${heightWrapper}px`;
        items[i].classList.toggle('item_active');
      } else {
        textWrapper[i].style.height = '';
        items[i].classList.remove('item_active');
      }
    }
  });
});

// buttons.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     items[index].classList.toggle('item_active');
//   });
// });

// buttons.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     for (let i = 0; i < items.length; i++) {
//       if (index === i) {
//         textWrapper[i].style.height =
//           items[i].classList.contains('item_active') ?
//             '' : `${textWrapper[i].scrollHeight}px`;
//         // items[i].classList.add('item_active');
//         items[i].classList.toggle('item_active');
//       } else {
//         textWrapper[i].style.height = '';
//         items[i].classList.remove('item_active');
//       }
//     }
//   });
// });
