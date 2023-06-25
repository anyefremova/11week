const textInput = document.getElementById('entry__field')
const buttonAdd = document.getElementById('add__button')
const taskList = document.getElementById('task__list')

function createTask() {
    const newTask = document.createElement('li');
    newTask.textContent = textInput.value;
    taskList.append(newTask);
    textInput.value = "";
}

document.querySelector('#add__button').onclick = createTask;

function checkTask(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('done')
    }
}

buttonAdd.addEventListener('click', createTask);
taskList.addEventListener('click', checkTask);