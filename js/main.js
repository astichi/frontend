'use strict';

document.querySelector('.ads').remove();

const item = document.querySelectorAll('.item');
item[3].after(item[0]);

const itemTitle = document.querySelectorAll('.item__title');
itemTitle[0].replaceWith(itemTitle[3].cloneNode(true));
itemTitle[3].replaceWith(itemTitle[4].cloneNode(true));
itemTitle[4].replaceWith(itemTitle[0].cloneNode(true));

const h2 = document.createElement('h2');
const text = document.createTextNode('This и прототипы объектов');
h2.append(text);
h2.classList.add('item__title');
itemTitle[1].replaceWith(h2);

const propsList = document.querySelectorAll('.props__list');
propsList[2].replaceWith(propsList[4].cloneNode(true));
propsList[4].replaceWith(propsList[2].cloneNode(true));

const propsItemTwo = document.querySelectorAll('.props__item_two');
propsItemTwo[7].append(propsItemTwo[8]);
propsItemTwo[8].append(propsItemTwo[9]);

const propsItemFour = document.querySelectorAll('.props__item_four');
propsItemFour[3].after(propsItemFour[0]);
