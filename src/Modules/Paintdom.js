// This module will take care of all the DOM related functionality.
import { createTodo, todoArray } from "./Factory";
import { cleanInput } from "./HelperFunctions";

// Create Todo Dom element
const addBtn = document.getElementById('addList')

function createTodoListElement() {
    const todo = createTodo()
    todoArray.push(todo)

    const mainInbox = document.getElementById('InboxContainer')

    const div = document.createElement('div')
    div.classList.add('todoStyle')
    const title = document.createElement('p')
    title.textContent = todo.title
    const description = document.createElement('p')
    description.textContent = todo.description
    const priority = document.createElement('p')
    priority.textContent = todo.priority
    const dueDate = document.createElement('p')
    dueDate.textContent = todo.dueDate

    div.appendChild(title)
    div.appendChild(description)
    div.appendChild(priority)
    div.appendChild(dueDate)

    mainInbox.appendChild(div)
}

addBtn.addEventListener('click', () => {
    createTodoListElement()
    cleanInput()
})















