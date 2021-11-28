// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtnn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listener
loadEventListeners();

function loadEventListeners(){
    // DOM LOAD event
    document.addEventListener('DOMContentLoaded', getTasks);
    //Add tasks event
    form.addEventListener('submit', addTask);
    //remove tasks event
    taskList.addEventListener('click', removeTask);
    //Clear task event
    clearBtnn.addEventListener('click', clearTasks);
    //Filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

//Get tasks
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
         //Create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(task));
    //Create new linke el;ement
    const link = document.createElement('a');
    ///Add class
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></li>';
    //Append link to li
    li.appendChild(link);
    //Append li to ul
    taskList.appendChild(li);
    })
}

//Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a Task');
    }

    //Create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new linke el;ement
    const link = document.createElement('a');
    ///Add class
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></li>';
    //Append link to li
    li.appendChild(link);
    //Append li to ul
    taskList.appendChild(li);
     //Store in LS
    storeTaskInLocalStorage(taskInput.value);
    //Clear the input
    taskInput.value="";

   

    e.preventDefault();
}

//Store Task 
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove Task

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure? ')){
            e.target.parentElement.parentElement.remove();
            //Remove from local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

//Remove from Local Storage

function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Clear Tasks
function clearTasks(){
    //Method 1
   // taskList.innerHTML='';

    //Method 2 - Faster
    //https://jsperf.com/innerhtml-vs-removechild/47
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    //Clear tasks from local storage
    clearTasksFromLocalStorage();
}

//Clease tasks from local storage
    function clearTasksFromLocalStorage(){
        localStorage.clear();
    }

//Filter tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
            }
            else{
                task.style.display = 'none';
            }
        }
    );
}

