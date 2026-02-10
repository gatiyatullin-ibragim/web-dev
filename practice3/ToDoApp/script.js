const addButton = document.querySelector('.btn-add');
const todoList = document.getElementById('todo-list');
const taskForm = document.getElementById('task-form')
const delButton = document.querySelectorAll('.del-btn');
const input = document.getElementById('new-task-input');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTask(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function load(){
    todoList.innerHTML = '';
    tasks.forEach(taskText => {

        let li = document.createElement('li');
        li.classList.add('task-item');

        let span = document.createElement('span');
        span.classList.add('task-text');
        span.innerText = taskText;

        let delButton = document.createElement('button');
        delButton.classList.add('del-btn');
        delButton.innerText = 'del';

        li.appendChild(span);
        li.appendChild(delButton);
        todoList.appendChild(li);
    });
}


addButton.addEventListener('click', function(event){
    event.preventDefault();
    let taskText = input.value;

    if(taskText.trim() === "")return;

    tasks.push(taskText);
    saveTask();
    
    let li = document.createElement('li');
    li.classList.add('task-item');


    let span = document.createElement('span');
    span.classList.add('task-text');
    span.innerText = taskText;

    let delButton = document.createElement('button');
    delButton.classList.add('del-btn');
    delButton.innerText = 'del';

    li.appendChild(span);
    li.appendChild(delButton);

    todoList.appendChild(li);
    input.value = '';
})


todoList.addEventListener('click', function(event){
        if(event.target.classList.contains('del-btn')){
            let li = event.target.closest('.task-item');
            let taskText = li.querySelector('.task-text').innerText;
            
            tasks = tasks.filter(task => task !== taskText);
            saveTask;

            li.remove();
        }
});
load();