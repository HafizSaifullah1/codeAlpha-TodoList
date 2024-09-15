function addTask (){


    
}


// Function to load tasks from localStorage when the page loads
window.onload = function() {
    loadTasks();
}

// Function to add a task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();

    if (task) {
        const taskList = document.getElementById('task-list');
        const listItem = createTaskElement(task);
        
        // Append task to the list
        taskList.appendChild(listItem);
        
        // Save task to localStorage
        saveTask(task);

        // Clear the input
        taskInput.value = '';
    }
}

// Function to create a task element
function createTaskElement(taskText) {
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        listItem.remove();
        deleteTask(taskText);
    };

    listItem.appendChild(span);
    listItem.appendChild(deleteButton);

    return listItem;
}

// Function to save a task to localStorage
function saveTask(task) {
    let tasks = getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from localStorage
function loadTasks() {
    const tasks = getTasks();
    tasks.forEach(task => {
        const taskList = document.getElementById('task-list');
        const listItem = createTaskElement(task);
        taskList.appendChild(listItem);
    });
}

// Function to get tasks from localStorage
function getTasks() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

// Function to delete a task from localStorage
function deleteTask(task) {
    let tasks = getTasks();
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
