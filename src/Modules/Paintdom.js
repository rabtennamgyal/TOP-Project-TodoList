// This module will take care of all the DOM related functionality.
import { 
    createTodo, deleteTodo, editTodo, todoArray, saveInputInfo, 
    index, createTodo2, dayArray, deleteDayList, editDayList, saveInputInfo2,
    projectPagesArray, projectListArray, createNewProject, deleteProject
} from "./Factory";
import { renderInboxPage, renderTodayPage, renderProjectPage, renderPages} from './View'
import { cleanInput } from "./HelperFunctions";


// Buttons for (Pages) Inbox, Today & Projects Page.
const inboxBtn = document.querySelector('.inboxContainer')
const todayBtn = document.querySelector('.dayContainer')
const projectBtn = document.querySelector('.projectContainer')


// Buttons for (List) List Creation & Deletion
const addBtn = document.getElementById('addList')
const editBtn = document.getElementById('editList')
const addBtn2 = document.getElementById('addList2')
const editBtn2 = document.getElementById('editList2')


// Buttons for (Project) Creation & Deletion
const newProject = document.getElementById('addProject')
// Delete Project Function is called on Project List cuz the x element is created dynamically.
const projectList = document.querySelector('.projectList')



// 1.
// Pages Code
let currentPage = localStorage.getItem('Page')

function renderPage(page) {
    const content = document.querySelector('.content')
    content.innerHTML = ''
    localStorage.setItem('Page', page.innerHTML)
    content.appendChild(page)
}


function showPage(el) {
    const content = document.querySelector('.content')
    content.innerHTML = ''
    const curPage = document.createElement('div')
    curPage.classList.add('pageStyle')
    curPage.classList.add('pageStyle2')
    curPage.classList.add('AStyle')
    curPage.innerHTML = el
    content.appendChild(curPage)
}


showPage(currentPage)


// 2.
// List Code
todoArray.forEach(el => {
    renderList(el.title, el.description, el.priority, el.dueDate)
})


dayArray.forEach(el => {
    renderList2(el.title, el.description, el.priority, el.dueDate)
})


function renderList(title, description, priority, dueDate) {
    const mainInbox = document.querySelector('.contentInbox')

    if (!mainInbox) {
        return
    } else {
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
}


function renderList2(title, description, priority, dueDate) {
    const mainInbox = document.querySelector('.contentToday')

    if (!mainInbox) {
        return
    } else {
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
                <button class='delete2' id='deleteTodo'><i class="far fa-trash-alt"></i></button>
                <button class='edit2' id='editTodo'><i class="far fa-edit"></i></button>
            </div>
        </div>
        
        <div class='divTwo'>
            <p>${description}</p>
        </div>
        `
    
        div.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete2')) {
                deleteDayList(e)
                div.parentNode.removeChild(div)
            }
        })
    
        div.addEventListener('click', (e) => {
            if (e.target.classList.contains('edit2')) {
                saveInputInfo2(e)
                const module2 = document.querySelector('.module2')
                module2.style.display = 'grid'
                const add2 = document.getElementById('addList2')
                const edit2 = document.getElementById('editList2')
                add2.style.display = 'none'
                edit2.style.display = 'block'
            }
        })
    
        mainInbox.appendChild(div)
    }
}


function deleteAllElement() {
    const mainInbox = document.querySelector('.contentInbox')

    if (mainInbox) {
        while(mainInbox.hasChildNodes()) {
            mainInbox.removeChild(mainInbox.firstChild)
        }
    } else {
        return
    }
}


function deleteAllElement2() {
    const mainInbox = document.querySelector('.contentToday')

    if (mainInbox) {
        while(mainInbox.hasChildNodes()) {
            mainInbox.removeChild(mainInbox.firstChild)
        }
    } else {
        return
    }
}


function createTodoListElement() {
    const todo = createTodo()
    todoArray.push(todo)
    localStorage.setItem('List', JSON.stringify(todoArray))
    renderList(todo.title, todo.description, todo.priority, todo.dueDate)
}


function createTodoListElement2() {
    const todo = createTodo2()
    dayArray.push(todo)
    localStorage.setItem('dayList', JSON.stringify(dayArray))
    renderList2(todo.title, todo.description, todo.priority, todo.dueDate)
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


function createEditedTodoElement2() {
    // 1. Change the list details in the todoArray & the local Storage
    editDayList()    

    // 2. Delete all the dom elements ( so that the new element doesn't get put at the end )
    deleteAllElement2()

    // 3. Render all the dom elements again ( the line up is already taken care by the 1. editTodo() function )
    dayArray.forEach(el => {
        renderList2(el.title, el.description, el.priority, el.dueDate)
    })    
}



// 3. Project Code
// Everything to do with projects


function renderProjectListElement(value) {
    const main = document.querySelector('.projectList')

    const list = document.createElement('div')
    list.classList.add('list')
    const divOne = document.createElement('p')
    divOne.textContent = value
    const divTwo = document.createElement('p')
    divTwo.classList.add('deleteProject')
    divTwo.innerHTML = '<h1 class="deleteProjectBtn">x</h1>'
    // </i>'
    list.appendChild(divOne)
    list.appendChild(divTwo)
    
    main.appendChild(list)
}


projectListArray.forEach(el => {
    renderProjectListElement(el)
})




// 1. List Event Listeners
addBtn.addEventListener('click', (e) => {
    createTodoListElement()
    cleanInput()
})


editBtn.addEventListener('click', (e) => {
    createEditedTodoElement()
    cleanInput()
})


addBtn2.addEventListener('click', (e) => {
    createTodoListElement2()
    cleanInput()
})


editBtn2.addEventListener('click', (e) => {
    createEditedTodoElement2()
    cleanInput()
})


// 2. Page Event Listeners
window.addEventListener('load', () => {
    if (!localStorage.getItem('Page')) {
        renderPage(renderInboxPage())
    } else {
        return
    }
})


inboxBtn.addEventListener('click', () => {
    renderPage(renderInboxPage())
    todoArray.forEach(el => {
        renderList(el.title, el.description, el.priority, el.dueDate)
    })
})


todayBtn.addEventListener('click', () => {
    renderPage(renderTodayPage())
    dayArray.forEach(el => {
        renderList2(el.title, el.description, el.priority, el.dueDate)
    })
})


projectBtn.addEventListener('click', () => {
    renderPage(renderProjectPage())
})


// 3. Project Event Listeners


newProject.addEventListener('click', () => {
    const value = document.getElementById('projectName').value

    createNewProject()
    renderProjectListElement(value)
})


projectList.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteProjectBtn')) {
        const div = e.target.parentNode.parentNode
        div.parentNode.removeChild(div)
        deleteProject(e)
    }
})