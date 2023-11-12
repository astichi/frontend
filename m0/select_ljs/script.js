'use strict';

const select = document.getElementById('select');

// select.options[1].selected = true;
// select.selectIndex = 3;
// select.value = 'tomato';


console.log(select);
console.log(select.options[3]);
console.log(select.options[4].value);
console.log(select.selected);
console.log(select.selectIndex);
console.log(select.value);

// option = new Option(text, value, defaultSelected, selected);
const option1 = new Option('ORANGE', 'orange', true, false); // атрибут
console.log(option1);
const option2 = new Option('LEMON', 'lemon', false, true); // выбранное
console.log(option2);
const option3 = new Option('KIWI', 'kiwi', true, true); // так, либо false
console.log(option3);

select.append(option1, option2, option3);
console.log(select);

let selected = Array.from(select.options)
  .filter(option => option.selected)
  .map(option => option.value);

console.log(selected);

console.log(option1.selected);
console.log(option1.index);
console.log(option1.value);
console.log(option1.text);

console.log('----------------------');

console.log(genres.value);

const selectedOption = genres.options[genres.selectedIndex];
console.log(selectedOption);
console.log(selectedOption.value);
console.log(selectedOption.text);

const newOption = new Option('Классика', 'classic', true, true);
genres.append(newOption);
genres.append(new Option('Классика', 'classic', true, true));
// newOption.selected = true;
console.log(document.getElementById('genres'));