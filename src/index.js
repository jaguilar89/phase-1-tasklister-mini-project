document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  const list = document.querySelector('#list')
  form.addEventListener('submit', addTask)
  list.addEventListener('click', removeTask)
});

function addTask(event) {
  event.preventDefault()
  const tasks = document.querySelector('#tasks');
  let li = document.createElement('li');
  li.textContent = `${event.target.new_todo.value} `;

  let deleteButton = document.createElement('button')
  deleteButton.className = 'delete-btn';
  deleteButton.textContent = 'remove';
  
  li.appendChild(deleteButton);
  tasks.appendChild(li)
}

function removeTask(event) {
  if (event.target.className === 'delete-btn') {
    event.target.parentNode.remove();
  }
}
