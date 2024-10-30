const taskInput = document.getElementById('input');
const addTaskButton = document.getElementById('btn');
const ongoingTaskList = document.getElementById('a-faire');
const completedTaskList = document.getElementById('fait');
const tasks = [];

console.log(taskInput, addTaskButton, ongoingTaskList, completedTaskList);


addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
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
    deleteButton.addEventListener('click', () => taskItem.remove());

    
    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);


    ongoingTaskList.appendChild(taskItem);
}

function markAsCompleted(taskItem) {
    taskItem.querySelector('button').remove();
    taskItem.querySelector('button').remove();
    completedTaskList.appendChild(taskItem);
}
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if(tasks.includes(taskText)) {
        alert("cette tache existe déjà!");
    } else {
        addTask(taskText);
        tasks.push(taskText);
        taskInput.value ='';
    }
});
