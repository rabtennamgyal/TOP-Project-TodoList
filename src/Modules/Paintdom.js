// This module will take care of all the DOM related functionality.
import { createTodo, deleteTodo, editTodo, todoArray, saveInputInfo, index } from "./Factory";
import { cleanInput } from "./HelperFunctions";


const addBtn = document.getElementById('addList')
const editBtn = document.getElementById('editList')


todoArray.forEach(el => {
    renderList(el.title, el.description, el.priority, el.dueDate)
})


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

    div.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit')) {
            saveInputInfo(e)
            const module = document.querySelector('.module')
            module.style.display = 'grid'
            const add = document.getElementById('addList')
            const edit = document.getElementById('editList')
            add.style.display = 'none'
            edit.style.display = 'block'
        }
    })

    mainInbox.appendChild(div)
}


function deleteAllElement() {
    const mainInbox = document.getElementById('InboxContainer')

    while(mainInbox.hasChildNodes()) {
        mainInbox.removeChild(mainInbox.firstChild)
    }
}


function createTodoListElement() {
    const todo = createTodo()
    todoArray.push(todo)
    localStorage.setItem('List', JSON.stringify(todoArray))
    renderList(todo.title, todo.description, todo.priority, todo.dueDate)
}


function createEditedTodoElement() {
    // 1. Change the list details in the todoArray & the local Storage
    editTodo()    

    // 2. Delete all the dom elements ( so that the new element doesn't get put at the end )
    deleteAllElement()

    // 3. Render all the dom elements again ( the line up is already taken care by the 1. editTodo() function )
    todoArray.forEach(el => {
        renderList(el.title, el.description, el.priority, el.dueDate)
    })    
}


addBtn.addEventListener('click', () => {
    createTodoListElement()
    cleanInput()
})


editBtn.addEventListener('click', () => {
    createEditedTodoElement()
    cleanInput()
})



