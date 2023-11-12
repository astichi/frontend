'use strict';

const table = document.getElementById('bagua-table');
let editingTd;

const makeTdEditable = (td) => {
  editingTd = {
    elem: td,
    data: td.innerText,
  };

  td.classList.add('edit-td');
  // td в состоянии редактирования, CSS применятся к textarea внутри ячейки

  const textArea = document.createElement('textarea');
  textArea.className = 'edit-area';
  textArea.style.width = td.clientWidth + 'px';
  textArea.style.height = td.clientHeight + 'px';
  textArea.value = td.innerText;

  td.innerText = '';
  td.appendChild(textArea);
  textArea.focus();

  td.insertAdjacentHTML('beforeend', `
    <div class="edit-controls">
      <button class="edit-ok">ok</button>
      <button class="edit-cancel">cancel</button>
    </div>
  `);
};

const finishTdEdit = (td, isOk) => {
  if (isOk) {
    td.innerText = td.firstChild.value;
  } else {
    td.innerText = editingTd.data;
  }

  td.classList.remove('edit-td');
  editingTd = null;
};

table.addEventListener('click', e => {
  // 3 возможных цели
  const target = e.target.closest('td, .edit-ok, .edit-cancel');

  if (!table.contains(target)) return;

  if (target.className === 'edit-ok') {
    finishTdEdit(editingTd.elem, true);
  }

  if (target.className === 'edit-cancel') {
    finishTdEdit(editingTd.elem, false)
  }

  if (target.nodeName === 'TD') {
    if (editingTd) return; // уже редактируется

    makeTdEditable(target);
  }
});


