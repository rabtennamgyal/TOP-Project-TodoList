// This Module will take care of all the application logics 🔮

import Todo from "./TodoList"

// function to create new todo list
function createTodo() {
    const title = document.getElementById('todoTitle').value
    const description = document.getElementById('todoDescription').value
    const priority = document.getElementById('todoPriority').value
    const dueDate = document.getElementById('todoDueDate').value

    return new Todo(title, description, priority, dueDate)
}

// Array to store all the todo lists
let todoArray = localStorage.getItem('List') ? JSON.parse(localStorage.getItem('List')) : []


// function to delete todo list
function deleteTodo(e) {
    todoArray = JSON.parse(localStorage.getItem('List'))
    let parent = e.target.parentNode.parentNode
    let a = parent.childNodes[1].childNodes[1].textContent

    for (let i = 0; i < todoArray.length; i++) {
        if (todoArray[i].title === a) {
            let x = todoArray.indexOf(todoArray[i])
            let newArr = todoArray.splice(x, 1)
            localStorage.setItem('List', JSON.stringify(todoArray))
        }
    }
}

// function to save Input info in case the person might want to edit it later.
function saveInputInfo() {
    const title = document.getElementById('todoTitle').value
    const description = document.getElementById('todoDescription').value
    const priority = document.getElementById('todoPriority').value
    const dueDate = document.getElementById('todoDueDate').value

    console.log(new Todo(title, description, priority, dueDate))
    //return new Todo(title, description, priority, dueDate)
}






export { createTodo, deleteTodo, todoArray, saveInputInfo }