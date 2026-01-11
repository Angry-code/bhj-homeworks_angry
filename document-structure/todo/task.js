const btn = document.getElementById('tasks__add');
const allTasks = document.getElementById('tasks__list');

btn.addEventListener('click', (event) => {
    event.preventDefault();

    const taskInput = document.getElementById('task__input');
    if (taskInput.value.trim()) {
        const newTask =
            `<div class="task">
      <div class="task__title">
        ${taskInput.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>`;
        allTasks.insertAdjacentHTML('beforeEnd', newTask);
        taskInput.value = '';
    } else {
        location.reload()
    }
})

allTasks.addEventListener('click', (event) => {
    if (event.target.classList.contains('task__remove')) {
        event.target.closest('.task').remove();
    }
});

