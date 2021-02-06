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

    }

    deleteTodo(id){

    }

    toggleTodo(id){

    }

}

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
<input type="text" class="form-control pl-5" placeholder="New Todo">
<button class="btn btn-outline-secondary" type="button" id="AddTodo">Add Todo</button>
</div>`;

const inputDiv = document.createElement('div');
inputDiv.innerHTML = input;
app.appendChild(inputDiv);