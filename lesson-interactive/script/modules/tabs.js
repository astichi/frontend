const tabsBtnsWrapper = document.querySelector('.tabs__buttons');
const tabsBtns = document.querySelectorAll('.tabs__btn');
const tabsItems = document.querySelectorAll('.tabs__item');

let heightWrapper = 0;

tabsItems.forEach(elem => {
  if (heightWrapper < elem.scrollHeight) {
    heightWrapper = elem.scrollHeight;
  }
});

tabsBtnsWrapper.addEventListener('click', ({target}) => {
  if (target.matches('.tabs__btn')) {
    tabsBtns.forEach(btn => {
      if (btn === target) {
        btn.classList.add('tabs__btn_active');
      } else {
        btn.classList.remove('tabs__btn_active');
      }
    });

    tabsItems.forEach(elem => {
      if (elem.dataset.tabs === target.dataset.tabs) {
        elem.style.height = `${heightWrapper}px`;
        elem.classList.add('tabs__item_active');
      } else {
        elem.classList.remove('tabs__item_active');
      }
    });
  }
});

// tabsBtns.forEach((btn, indexBtn) => {
//   btn.addEventListener('click', () => {
//     tabsItems.forEach((item, indexItem) => {
//       if (indexBtn === indexItem) {
//         tabsBtns[indexItem].classList.add('tabs__btn_active');
//         item.classList.add('tabs__item_active');
//       } else {
//         tabsBtns[indexItem].classList.remove('tabs__btn_active');
//         item.classList.remove('tabs__item_active');
//       }
//     });
//   });
// });
