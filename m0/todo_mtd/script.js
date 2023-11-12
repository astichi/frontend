'use strict';

const form = document.querySelector('.form');
const author = document.querySelector('.input-author');
const post = document.querySelector('.input-post');
const list = document.querySelector('.todo-list');


const base = {
  employee: 'Альбус Дамблдор',
  todo: getTodoLS(),
  check(id) {
    for (let i = 0; i < base.todo.length; i++) {
      if (base.todo[i].id === id) {
        base.todo[i].ready = true;
      }
    }
  },
  addTodo(author, post) {
    const todo = {
      id: 'td' + (base.todo.length + 1),
      // id: 'td' + (Date.now()),
      author,
      post,
      ready: false,
    };
    base.todo.push(todo);
    return todo;
  }
};

function addTodo(event) {
  event.preventDefault();

  const authorText = author.value;
  const postText = post.value;
  const objTodo = base.addTodo(authorText, postText);
  const todoLi = createTodo(objTodo);

  list.append(todoLi);
  setTodoLS();
  form.reset();
};

function createTodo(objTodo) {
  const todoItem = `
    <article class="post ${objTodo.ready ? 'post-complete' : ''}">
      <h3 class="author-todo">${objTodo.author}</h3>
      <p class="post-todo">${objTodo.post}</p>
      ${!objTodo.ready ?
        `<button
          class="post-ready"
          type="button"
          data-id="${objTodo.id}"
        >завершить</button>` : ''
      }
    </article>
  `;

  const li = document.createElement('li');
  li.classList.add('todo-item');
  li.innerHTML = todoItem;

  return li;
};

function renderTodo() {
  for (let i = 0; i < base.todo.length; i++) {
    const todoLi = createTodo(base.todo[i]);
    list.append(todoLi);
  }
};

function checkTodo(event) {
  const btn = event.target.closest('.post-ready');

  if (btn) {
    const post = btn.closest('.post');
    btn.remove();
    post.classList.add('post-complete');
    const id = btn.dataset.id;
    base.check(id);
    setTodoLS();
  }

  console.log(base.todo);
};

function getTodoLS() {
  if (localStorage.getItem('todo')) {
    return JSON.parse(localStorage.getItem('todo'));
  }
  return [];
};

function setTodoLS() {
  localStorage.setItem('todo', JSON.stringify(base.todo));
};

setTodoLS();

renderTodo();

form.addEventListener('submit', addTodo);
list.addEventListener('click', checkTodo);
