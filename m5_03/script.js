'use strict';

const addItem = () => {
  const text = prompt('Введите текст:');
  const list = document.querySelector('.list');
  const item = document.createElement('li');

  const isDelete = () => {
    list.lastChild.remove();
    return addItem();
  };

  const isClear = () => {
    list.textContent = '';
    return addItem();
  };

  if (text === null || text === 'exit') return;
  if (text === '' || !(text.trim())) return addItem();
  if (text === 'del') return isDelete();
  if (text === 'clear') return isClear();

  item.append(text);
  list.append(item);

  return addItem();
};

addItem();