'use strict';

const container = document.querySelector('.container');
const local = document.querySelector('.local');
const resetLocal = document.querySelector('.reset-local');

container.addEventListener('change', e => {
  const target = e.target;
  const parent = target.closest('.local');

  // parent.style.backgroundColor = parent.color.value;
  // parent.style.fontSize = parent['font-size'].value + 'px';

  // if (parent === local) {
  //   console.log('local');
  //   localStorage.setItem(target.name, target.value);
  // }

  const style = {
    backgroundColor: parent.color.value,
    fontSize: parent['font-size'].value,
  };

  parent.style.backgroundColor = style.backgroundColor;
  parent.style.fontSize = style.fontSize + 'px';

  if (parent === local) {
    console.log('local');
    localStorage.setItem('local-style', JSON.stringify(style));
  }
});

const init = () => {
  // local.color.value = localStorage.getItem('color') || local.color.value;
  // local['font-size'].value = localStorage.getItem('font-size') || local['font-size'].value;

  // local.style.backgroundColor = local.color.value;
  // local.style.fontSize = local['font-size'].value + 'px';

  const localStyle = JSON.parse(localStorage.getItem('local-style'));

  local.color.value = localStyle?.backgroundColor || local.color.value;
  local['font-size'].value = localStyle?.fontSize || local['font-size'].value;

  local.style.backgroundColor = local.color.value;
  local.style.fontSize = local['font-size'].value + 'px';
};

resetLocal.addEventListener('click', () => {
  localStorage.clear();
  local.reset();
  init();
});

init();

window.addEventListener('storage', e => {
  console.log(e);
  init();
});

///////////////////////////////////////////////////////////////////////////
const getLocalStorageData = () => Object.entries(localStorage)
  .reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch {
      console.log(value);
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});

  console.log(getLocalStorageData());

///////////////////////////////////////////////////////////////////////////
const user = {
  name: 'John Doe',
  age: 30,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};

localStorage.setItem('test-user', JSON.stringify(user));

const readUser = () => {
  const userJSON = localStorage.getItem('test-user');

  if (userJSON === null) {
    return undefined;
  }

  // если в хранилище невалидный JSON
  try {
    return JSON.parse(userJSON);
  } catch (error) {
    localStorage.removeItem('test-user');
    return undefined;
  }
};

console.log(readUser());

///////////////////////////////////////////////////////////////////////////
const getItem = (key) => {
  try {
    console.log('getItem - ', key);
    return localStorage.getItem(key);
  } catch (e) {
    console.log(e);
  }
};

getItem('test-item');

const setItem = (key, value) => {
  try {
    console.log('setItem - ', key, value);
    return localStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

setItem('test-item', ['item', 'item']);

const setJSON = (key, value) => {
  try {
    const json = JSON.stringify(value);
    console.log('setJSON - ', json);
    setItem(key, json);
  } catch (e) {
    console.log(e);
  }
};

setJSON('test-json', {a: 'json'});

const getJSON = (key) => {
  try {
    const json = getItem(key);
    console.log('getJSON - ', json);
    return JSON.parse(json);
  } catch (e) {
    console.log(e);
  }
};

getJSON('test-json');