// This module will take care of all the DOM related functionality.
import { createTodo, deleteTodo, todoArray } from "./Factory";
import { cleanInput } from "./HelperFunctions";

// Create Todo Dom element
const addBtn = document.getElementById('addList')

function renderList(title, description, priority, dueDate) {
    const mainInbox = document.getElementById('InboxContainer')

    const div = document.createElement('div')
    div.classList.add('todoStyle')
    div.innerHTML = `
    <p>${title}</p>
    <p>${description}</p>
    <p>${priority}</p>
    <p>${dueDate}</p>
    <button class='delete' id='deleteTodo'><i class="far fa-trash-alt"></i></button>
    `

    div.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            deleteTodo(e)
            div.parentNode.removeChild(div)
        }
    })

    mainInbox.appendChild(div)
}

// This function will make the list appears indefinitely until deleted
todoArray.forEach(el => {
    renderList(el.title, el.description, el.priority, el.dueDate)
})


function createTodoListElement() {
    const todo = createTodo()
    todoArray.push(todo)
    localStorage.setItem('List', JSON.stringify(todoArray))
    renderList(todo.title, todo.description, todo.priority, todo.dueDate)

    console.log(todoArray)
}

addBtn.addEventListener('click', () => {
    createTodoListElement()
    cleanInput()
})



// localStorage.clear()













// const title = document.createElement('p')
// title.textContent = todo.title
// const description = document.createElement('p')
// description.textContent = todo.description
// const priority = document.createElement('p')
// priority.textContent = todo.priority
// const dueDate = document.createElement('p')
// dueDate.textContent = todo.dueDate

// div.appendChild(title)
// div.appendChild(description)
// div.appendChild(priority)
// div.appendChild(dueDate)