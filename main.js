(function($win, $doc) {
  'use strict';

  const todoAttrName = 'data-todo';
  const $todo = {
    app: $doc.querySelector(`[${todoAttrName}="app"]`),
    form: $doc.querySelector(`[${todoAttrName}="form"]`),
    input: $doc.querySelector(`[${todoAttrName}="input"]`),
    create: $doc.querySelector(`[${todoAttrName}="create"]`),
    list: $doc.querySelector(`[${todoAttrName}="list"]`)
  };

  $todo.form.addEventListener('submit', event => {
    event.preventDefault();

    const inputValue = $todo.input.value;

    if(inputValue) {
      $todo.list.appendChild(createTask(inputValue));
      $todo.input.value = '';
      $todo.input.focus();
    }
  }, false);

  function createTask(text) {
    const fragment = $doc.createDocumentFragment();
    const $item = createItem();
    const $link = createLink(text);
    const $delete = createDelete();

    $delete.addEventListener('click', () => {
      $item.remove();
    }, false);

    $item.appendChild($link);
    $item.appendChild($delete);
    fragment.appendChild($item);

    return fragment;
  }

  function createItem() {
    const $item = $doc.createElement('li');

    $item.classList.add('flex', 'border-b', 'py-2');

    return $item;
  }

  function createLink(text) {
    const $link = $doc.createElement('a');

    $link.href = '#';
    $link.textContent = text;
    $link.classList.add('block', 'px-2', 'py-4', 'flex-grow', 'hover:bg-grey-light', 'no-underline');
    $link.addEventListener('click', event => {
      event.preventDefault();

      $link.classList.toggle('no-underline');
      $link.classList.toggle('line-through');
      $link.classList.toggle('bg-grey-light');
    });

    return $link;
  }

  function createDelete() {
    const color = 'red';
    const $delete = $doc.createElement('button');

    $delete.classList.add(`bg-${color}`, `hover:bg-${color}-dark`, 'font-bold', 'py-1', 'px-2');

    $delete.textContent = 'Deletar';

    return $delete;
  }

})(window, document);
