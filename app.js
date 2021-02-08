//Class to create a single TODO
class Todo {
  constructor(task) {
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
        this.showTodo();
    }

    addTodo(todo){
        this.todos.push(todo);
        this.saveTodo();
    }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
    });
  }

  toggleTodo(id) {}

    saveTodo() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    showTodo() {
        if(localStorage.getItem('todo')) {
            this.todos = JSON.parse(localStorage.getItem('todo'));
        } else {
            this.todos = [];
        }
    }


}

//Instance of todoList class
const todoList = new TodoList();
console.log(todoList)

//Styles
//For the styles we use Bootstrap
const centerDiv = ["container", "text-center"];

//All the HTML elements are added on APP Variable
const app = document.querySelector("#app");
app.classList.add(...centerDiv);

const title = document.createElement("h1");
title.classList;
title.innerText = "Todo App";
app.appendChild(title);

//Input and button to add TODOS
const input = `<div class="input-group mb-3 input-container">
<input id='InputTodo' type="text" class="form-control pl-5" placeholder="New Todo">
<button class="btn btn-outline-secondary" type="button" id="AddTodo">Add Todo</button>
</div>`;

const inputDiv = document.createElement("div");
inputDiv.innerHTML = input;
app.appendChild(inputDiv);

//-------Create TODO-------//
const taskInput = document.querySelector("#InputTodo");

const divTodoList = document.createElement("ul");
divTodoList.className = "todo-list";
app.appendChild(divTodoList);

const createTodoHTML = (todo) => {
  const htmlTodo = `<li class="${todo.completed ? "completed" : ""}" data-id="${
    todo.id
  }">
        <div class="view container">
            <input class="toggle" type="checkbox" ${
              todo.completed ? "checked" : ""
            }>
            <label>${todo.todo}</label>
            <button id="delete-todo" class="btn btn-danger" >Eliminar</button>
        </div>
    </li>`;

  const div = document.createElement("div");
  div.innerHTML = htmlTodo;

  divTodoList.append(div.firstElementChild);

  return div.firstElementChild;
};

function printTodo(input) {
  const newTodo = new Todo(input.value);
  todoList.addTodo(newTodo);
  createTodoHTML(newTodo);
  input.value = "";
}

//Add TODO using button
const addTodoButton = document.querySelector("#AddTodo");

addTodoButton.addEventListener("click", (event) => {
  if (taskInput.value.length > 0) {
    printTodo(taskInput);
  }
});

///Add todo using Enter Key

taskInput.addEventListener('keyup', (event) => {
    if (event.keyCode == 13 && taskInput.value.length > 0) {
        printTodo(taskInput);
    }
})


//-------Delete TODO-------//
divTodoList.addEventListener('click',function (event) {
    
    if(event.target.nodeName === 'BUTTON') { // click on button 'Eliminar'

        const liTodo = event.target.parentElement.parentElement; // Select li parent of button
        const nodesdivTodoList = Array.from( this.children );  // Array of childres
        const indexliTodo = nodesdivTodoList.indexOf( liTodo ); // Select index
        const idTodo = liTodo.getAttribute('data-id'); // Get id
        todoList.deleteTodo(parseInt(idTodo)); // Delete toto by id
        this.removeChild(this.childNodes[indexliTodo]); // remove Todo

    };
});
  

// Insert elements from localstorage
todoList.todos.forEach(todo => createTodoHTML(todo));