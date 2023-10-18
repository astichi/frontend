'use strict';

const form = document.querySelector('form');
const sentData = data => console.log(data);

// формат FormData 
// если есть file, JSON не подходит
form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  sentData(formData);
});

// формат JSON
// если несколько чекбоксов - одно(последнее) значение отправит
// name: 'value'
form.addEventListener('submit', e => {
  e.preventDefault();

  const data = {};
  const formData = new FormData(e.target);

  for (const [name, value] of formData) {
    data[name] = value;
  }

  sentData(JSON.stringify(data));
});

// формат JSON 
// если несколько чекбоксов - массив значений
// name: [value, value, value]
form.addEventListener('submit', e => {
  e.preventDefault();

  const data = {};
  const formData = new FormData(e.target);

  for (const [name, value] of formData) {
    if(Object.keys(data).includes(name)) {
      if(!Array.isArray(data[name])) {
        data[name] = [data[name]];
      }
      data[name].push(value);
    } else {
      data[name] = value;
    }
  }

  sentData(JSON.stringify(data));
});

// формат JSON 
// если несколько чекбоксов - массив значений
// name: [value, value, value]
form.addEventListener('submit', e => {
  e.preventDefault();

  const checkboxes = new Set();
  [...form.elements].forEach(elem => {
    if (elem.type === 'checkbox') {
      checkboxes.add(elem.name);
    }
  });

  const data = {};
  const formData = new FormData(e.target);

  for (const [name, value] of formData) {
    if (checkboxes.has(name)) {
      if(Array.isArray(data[name])) {
        data[name].push(value);
      } else {
        data[name] = [value];
      }
    } else {
      data[name] = value;
    }
  }

  sentData(JSON.stringify(data));
});

// формат JSON 
// если несколько чекбоксов - массив значений
// name: [value, value, value]
form.addEventListener('submit', e => {
  e.preventDefault();

  const checkboxes = [];
  [...form.elements].forEach(elem => {
    if (elem.type === 'checkbox') {
      checkboxes.push(elem.name);
    }
  });

  const data = {};
  const formData = new FormData(e.target);

  for (const [name, value] of formData) {
    if (checkboxes.includes(name)) {
      if(Array.isArray(data[name])) {
        data[name].push(value);
      } else {
        data[name] = [value];
      }
    } else {
      data[name] = value;
    }
  }

  sentData(JSON.stringify(data));
});