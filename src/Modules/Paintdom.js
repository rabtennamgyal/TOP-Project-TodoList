// This module will take care of all the DOM related functionality.
import { createTodo, deleteTodo, todoArray, saveInputInfo } from "./Factory";
import { cleanInput } from "./HelperFunctions";


const addBtn = document.getElementById('addList')

function renderList(title, description, priority, dueDate) {
    const mainInbox = document.getElementById('InboxContainer')

    const div = document.createElement('div')
    div.classList.add('todoStyle')
    div.innerHTML = `
    <div class='divOne'>
        <div class='divOneOne'>
            <p>${title}</p>
            <p>${priority}</p>
            <p>${dueDate}</p>
        </div>

        <div class='divOneTwo'>
            <button class='delete' id='deleteTodo'><i class="far fa-trash-alt"></i></button>
            <button class='edit' id='editTodo'><i class="far fa-edit"></i></button>
        </div>
    </div>
    
    <div class='divTwo'>
        <p>${description}</p>
    </div>
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
}

addBtn.addEventListener('click', () => {
    createTodoListElement()
    saveInputInfo()

    // It has to be last because it changes the input value to '' / null
    cleanInput()
})
