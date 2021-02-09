//Class to create a single TODO
class Todo {
    constructor (task) {
        this.todo = task;
        this.id = new Date().getTime();
        this.completed = false;
        this.createAt = new Date();
    }
} 

//Class to create, delete and mark as complete the TODOS
class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo(todo){
        this.todos.push(todo);
    }

    deleteTodo(id){

    }

    toggleTodo(id){

    }

}

//Instance of todoList class
const todoList = new TodoList();

//Styles 
//For the styles we use Bootstrap
const centerDiv = ['container', 'text-center'];

//All the HTML elements are added on APP Variable
const app = document.querySelector('#app');
app.classList.add(...centerDiv);

const title = document.createElement('h1');
title.classList;
title.innerText = 'Todo App';
app.appendChild(title);

//Input and button to add TODOS
const input = `<div class="input-group mb-3 input-container">
<input id='InputTodo' type="text" class="form-control pl-5" placeholder="New Todo">
<button class="btn btn-outline-secondary" type="button" id="AddTodo">Add Todo</button>
</div>`;

const inputDiv = document.createElement('div');
inputDiv.innerHTML = input;
app.appendChild(inputDiv);

//-------Create TODO-------//
const taskInput = document.querySelector('#InputTodo');

const divTodoList = document.createElement('ul');
divTodoList.className = 'todo-list'
app.appendChild(divTodoList);

const createTodoHTML = (todo) => {
    const htmlTodo = `<li class="${todo.completed ? "completed" : ""}" data-id="${todo.id}">
        <div class="view container">
            <input class="form-check-input" type="checkbox" ${todo.completed ? "checked" : ""}>
            <label>${todo.todo}</label>
            <button id='delete-todo' class="btn btn-danger" >Eliminar</button>
        </div>
    </li>`

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild)

    return div.firstElementChild;
    
}

function printTodo(input) {
    const newTodo = new Todo(input.value);
        todoList.addTodo(newTodo);
        createTodoHTML(newTodo);
        input.value = "";
}

//Add TODO using button
const addTodoButton = document.querySelector('#AddTodo');

addTodoButton.addEventListener('click', (event) => {
    if (taskInput.value.length > 0){
        printTodo(taskInput);
    }
})

///Add todo using Enter Key
taskInput.addEventListener('keyup', (event) => {
    if (event.keyCode == 13 && taskInput.value.length > 0) {
        printTodo(taskInput);
    }
})



//------completed_task---------//


divTodoList.addEventListener('click',function (event) {
    

    if(event.target.checked == true){
        event.target.nextElementSibling.style.textDecoration = 'line-through'; //line-through
        id_Task = event.target.parentElement.parentElement.getAttribute('data-id'); // Obtenemos el id de la task
        console.log(id_Task)  
    } else {
        event.target.nextElementSibling.style.textDecoration = 'none';        
    }  
});

