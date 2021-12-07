// This Module will take care of all the application logics 🔮

import Todo from "./TodoList"
// import { renderList } from "./PaintDOM"


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


// function to edit todo list 
function editTodo(e) {
    todoArray = JSON.parse(localStorage.getItem('List'))
    let x
    let a = e.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].value

    for (let i = 0; i < todoArray.length; i++) {
        if (todoArray[i].title === a) {
            let x = todoArray.indexOf(todoArray[i])
            console.log(x)
        }
    }

    console.log(a)
}


// function to save Input info in case the person might want to edit it later.
function saveInputInfo(e) {
    let title = document.getElementById('todoTitle')
    let description = document.getElementById('todoDescription')
    let priority = document.getElementById('todoPriority')
    let dueDate = document.getElementById('todoDueDate')
    
    let parent = e.target.parentNode.parentNode
    let a = parent.childNodes[1].childNodes[1].textContent

    for (let i = 0; i < todoArray.length; i++) {
        if (todoArray[i].title === a) {
            let a = todoArray[i].title
            let b = todoArray[i].description
            let c = todoArray[i].priority
            let d = todoArray[i].dueDate

            title.value = a
            description.value = b
            priority.value = c
            dueDate.value = d
        }
    }
}






export { createTodo, deleteTodo, editTodo, todoArray, saveInputInfo }