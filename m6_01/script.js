'use strict';


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

const button = document.querySelector('.open');
button.addEventListener('click', () => {
  const win = open('about:blank', 'test', `width=300,height=300,left=${window.screen.width / 2 - 150},top=${window.screen.height / 2 - 150}`);
  const btn = document.createElement('button');
  btn.textContent = 'click';
  win.document.body.innerHTML = `
    <h1>Hello!</h1>
  `;
  win.document.body.append(btn);

  btn.addEventListener('click', () => {
    // win.moveTo(100, 100);
    // win.moveBy(100, 100);

    // win.close();

    // win.resizeTo(200,200);
    // win.resizeBy(-50, -50);
  });

});


