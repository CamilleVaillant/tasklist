const taskInput = document.getElementById('input');
const addTaskButton = document.getElementById('btn');
const ongoingTaskList = document.getElementById('a-faire');
const completedTaskList = document.getElementById('fait');
const tasks = [];

console.log(taskInput, addTaskButton, ongoingTaskList, completedTaskList);

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    
    if (tasks.some(task => task.toLowerCase() === taskText.toLowerCase())) {
        alert("Cette tâche existe déjà !");
    } else if (taskText !== '') {
        addTask(taskText);
        tasks.push(taskText); 
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Fait';
    completeButton.addEventListener('click', () => markAsCompleted(taskItem));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.addEventListener('click', () => {
        taskItem.remove();
        removeFromTasks(taskText); 
    });

    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);

    ongoingTaskList.appendChild(taskItem);
}

function markAsCompleted(taskItem) {
    
    taskItem.querySelectorAll('button').forEach(button => button.remove());
    
    
    completedTaskList.appendChild(taskItem);
}

function removeFromTasks(taskText) {
   
    const taskIndex = tasks.findIndex(task => task.toLowerCase() === taskText.toLowerCase());
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
    }
}
