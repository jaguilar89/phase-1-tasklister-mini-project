document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  const list = document.querySelector('#list');
  form.addEventListener('submit', buildTask);
  list.addEventListener('click', removeTask);
  list.addEventListener('click', editTask);
});

function buildTask(event) {
  event.preventDefault();
  //Create li element for the submitted task.
  const tasks = document.querySelector('#tasks');
  const li = document.createElement('li');
  li.className = 'task'
  li.textContent = event.target.new_todo.value;
  tasks.appendChild(li);

  //Create div for buttons.
  const div = document.createElement('div');
  div.className = 'buttons';
  //Create 'remove' button;
  const deleteButton = document.createElement('button')
  deleteButton.className = 'delete-btn';
  deleteButton.textContent = 'remove';
  deleteButton.style.padding = '5px';
  //Create 'edit' button
  const editButton = document.createElement('button');
  editButton.className = 'edit-btn';
  editButton.textContent = 'edit';
  editButton.style.padding = '5px';
  //Append buttons to div, then append div to li.
  div.append(editButton, deleteButton)
  div.style.display = 'inline-block';
  div.style.paddingLeft = '10px';
  li.appendChild(div);
  //Reset input field after submit
  document.querySelector('form').reset();
}
  

function removeTask(event) {
  if (event.target.className === 'delete-btn') {
    const li = event.target.parentNode.parentNode; //target li element which is the parent node of the div in which the buttons are contained
    li.remove();
  }
}

function editTask(event) {
  event.preventDefault();
  if (event.target.className === 'edit-btn') {
    const targetItem = event.target;
    //Create form element
    const form = document.createElement('form');
    form.setAttribute('id', 'edit-task');
    form.action = '';
    form.method = 'POST';
    //Create input field
    const inputField = document.createElement('input');
    inputField.setAttribute('id', 'input_field');
    inputField.type = 'text';
    inputField.placeholder = 'enter new task'
    //Create button to submit changes
    const submitButton = document.createElement('input');
    submitButton.setAttribute('id', 'submit_change');
    submitButton.type = 'submit';
    submitButton.name = 'submit_button'
    submitButton.textContent = 'submit change';
    //Create button to cancel changes
    const cancelButton = document.createElement('input');
    cancelButton.setAttribute('id', 'cancel-change');
    cancelButton.type = 'submit';
    cancelButton.name = 'cancel_button';
    cancelButton.value = 'cancel';
    //Append buttons to form
    form.append(inputField, submitButton, cancelButton);
    targetItem.parentNode.replaceWith(form);

    document.querySelector('#edit-task')
            .addEventListener('submit', () => {
              console.log(document.getElementById('input_field').value);
            }, false)
  }
}