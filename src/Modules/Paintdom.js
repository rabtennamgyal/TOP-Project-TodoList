// This module will take care of all the DOM related functionality.
import { createTodo, deleteTodo, editTodo, todoArray, saveInputInfo, index } from "./Factory";
import { cleanInput } from "./HelperFunctions";


const addBtn = document.getElementById('addList')
const editBtn = document.getElementById('editList')

// Function is render list to the dom. ( creates DOM element )
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


// Function to delete list element from the DOM.
function deleteListElement() {
    const mainInbox = document.getElementById('InboxContainer')
    mainInbox.removeChild(mainInbox.childNodes[index + 1])
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


function createEditedTodoElement() {
    const Box = document.getElementById('InboxContainer')
    const oldList = Box.childNodes[index + 1]

    // 1. Change the list details in the todoArray & the local Storage
    editTodo()    
    // 2. Delete the old dom element of the list
    deleteListElement()

    // 3. Render the dom element 
    const title = document.getElementById('todoTitle').value
    const description = document.getElementById('todoDescription').value
    const priority = document.getElementById('todoPriority').value
    const dueDate = document.getElementById('todoDueDate').value
    renderList(title, description, priority, dueDate)

    const newList = Box.childNodes[(todoArray.length - 1) + 1]

    Box.replaceChild(newList, oldList)
}


addBtn.addEventListener('click', () => {
    createTodoListElement()
    cleanInput()
})


editBtn.addEventListener('click', () => {
    createEditedTodoElement()
    cleanInput()
})



