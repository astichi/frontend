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
  cardWrapper.addEventListener('click', async ({target}) => {
    if (target.classList.contains('details')) {
      const checkBuy = await fetchRequest(`${URL}/${target.dataset.id}`, {
        callback: showModal,
      });
      console.log(checkBuy);
      if(checkBuy) {
        target.textContent = 'В корзине';
      }
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


////////////////////////////////////////////////////

const promise = new Promise(resolve => {
  setTimeout(resolve, 2000, '1');
});

const promise2 = new Promise(resolve => {
  setTimeout(resolve, 3000, '2');
});

(async () => {
  console.log(await promise);
  console.log(await promise2);
  console.log(await promise);
  console.log(await promise2);
})();