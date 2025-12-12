const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
let tasks = [];
let currentFilter = 'all';

window.onload = function() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        renderTasks();
    }
};

taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && taskInput.value.trim() !== '') {
        addTask(taskInput.value);
        taskInput.value = '';
    }
});

function formatDate() {
    const d = new Date();
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = String(d.getFullYear()).slice(-2);
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${day}.${month}.${year}, ${hours}:${minutes}`;
}

function addTask(text) {
    const newTask = {
        id: Date.now(),
        text: text,
        date: formatDate(),
        completed: false
    };
    tasks.push(newTask);
    saveAndRender();
}

function saveAndRender() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = '';

    let filteredTasks = tasks;
    if (currentFilter === 'active') {
        filteredTasks = tasks.filter(t => !t.completed);
    } else if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(t => t.completed);
    }

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        if (task.completed) li.classList.add('completed');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.onclick = () => toggleComplete(task.id);

        const spanText = document.createElement('span');
        spanText.className = 'task-text';
        spanText.textContent = task.text;
        spanText.ondblclick = () => editTask(task.id, spanText);

        const spanDate = document.createElement('span');
        spanDate.className = 'date-span';
        spanDate.textContent = task.date;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'X';
        deleteBtn.onclick = () => deleteTask(task.id);

        const divContent = document.createElement('div');
        divContent.className = 'task-content';

        divContent.appendChild(checkbox);
        divContent.appendChild(spanText);

        li.appendChild(divContent);
        li.appendChild(spanDate);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}

function toggleComplete(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    saveAndRender();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveAndRender();
}

function editTask(id, spanElement) {
    if (spanElement.querySelector('input')) return;

    const originalText = spanElement.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = originalText;
    input.className = 'edit-input';

    spanElement.textContent = '';
    spanElement.appendChild(input);
    input.focus();

    input.onkeydown = function(e) {
        if (e.key === 'Enter') {
            saveEdit(id, input.value);
        }
    };

    input.onblur = function() {
        saveEdit(id, input.value);
    };
}

function saveEdit(id, newText) {
    if (newText.trim() !== '') {
        tasks = tasks.map(task => {
            if (task.id === id) task.text = newText;
            return task;
        });
        saveAndRender();
    } else {
        renderTasks();
    }
}

function filterTasks(filterType) {
    currentFilter = filterType;

    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    renderTasks();
}
