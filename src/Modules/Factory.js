// This Module takes care of all the application logics 🔮
import { Todo, Todo2 } from './TodoList'

// Arrays to store different List ( Inbox, Today & Projets )
let todoArray = localStorage.getItem('List') ? JSON.parse(localStorage.getItem('List')) : [] 
let dayArray = localStorage.getItem('dayList') ? JSON.parse(localStorage.getItem('dayList')) : []

// Arrays to store all the newly created projects pages
let projectListArray = localStorage.getItem('ProjectList') ? JSON.parse(localStorage.getItem('ProjectList')) : []
let projectPagesArray = localStorage.getItem('ProjectPages') ? JSON.parse(localStorage.getItem('ProjectPages')) : []


// 1.
// List Creation & Deletion Starts Here
function createTodo() {
    const title = document.getElementById('todoTitle').value
    const description = document.getElementById('todoDescription').value
    const priority = document.getElementById('todoPriority').value
    const dueDate = document.getElementById('todoDueDate').value

    return new Todo(title, description, priority, dueDate)
}


function createTodo2() {
    const title = document.getElementById('todoTitle2').value
    const description = document.getElementById('todoDescription2').value
    const priority = document.getElementById('todoPriority2').value
    const dueDate = document.getElementById('todoDueDate2').value

    return new Todo2(title, description, priority, dueDate)
}


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


function deleteDayList(e) {
    dayArray = JSON.parse(localStorage.getItem('dayList'))
    let parent = e.target.parentNode.parentNode
    let a = parent.childNodes[1].childNodes[1].textContent

    for (let i = 0; i < dayArray.length; i++) {
        if (dayArray[i].title === a) {
            let x = dayArray.indexOf(dayArray[i])
            let newArr = dayArray.splice(x, 1)
            localStorage.setItem('dayList', JSON.stringify(dayArray))
        }
    }
}


let index


function editTodo() {
    todoArray = localStorage.getItem('List') ? JSON.parse(localStorage.getItem('List')) : []

    const title = document.getElementById('todoTitle').value
    const description = document.getElementById('todoDescription').value
    const priority = document.getElementById('todoPriority').value
    const dueDate = document.getElementById('todoDueDate').value

    let newList = new Todo(title, description, priority, dueDate)

    todoArray.splice(index, 1, newList)
    localStorage.setItem('List', JSON.stringify(todoArray))
}


function editDayList() {
    dayArray = localStorage.getItem('dayList') ? JSON.parse(localStorage.getItem('dayList')) : []

    const title = document.getElementById('todoTitle2').value
    const description = document.getElementById('todoDescription2').value
    const priority = document.getElementById('todoPriority2').value
    const dueDate = document.getElementById('todoDueDate2').value

    let newList = new Todo2(title, description, priority, dueDate)

    dayArray.splice(index, 1, newList)
    localStorage.setItem('dayList', JSON.stringify(dayArray))
}


function saveInputInfo(e) {
    let title = document.getElementById('todoTitle')
    let description = document.getElementById('todoDescription')
    let priority = document.getElementById('todoPriority')
    let dueDate = document.getElementById('todoDueDate')
    
    let parent = e.target.parentNode.parentNode
    let a = parent.childNodes[1].childNodes[1].textContent

    for (let i = 0; i < todoArray.length; i++) {
        if (todoArray[i].title === a) {
            index = todoArray.indexOf(todoArray[i])
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


function saveInputInfo2(e) {
    let title = document.getElementById('todoTitle2')
    let description = document.getElementById('todoDescription2')
    let priority = document.getElementById('todoPriority2')
    let dueDate = document.getElementById('todoDueDate2')
    
    let parent = e.target.parentNode.parentNode
    let a = parent.childNodes[1].childNodes[1].textContent

    for (let i = 0; i < dayArray.length; i++) {
        if (dayArray[i].title === a) {
            index = dayArray.indexOf(dayArray[i])
            let a = dayArray[i].title
            let b = dayArray[i].description
            let c = dayArray[i].priority
            let d = dayArray[i].dueDate

            title.value = a
            description.value = b
            priority.value = c
            dueDate.value = d
        }
    }
}
// List Creation & Deletion Ends Here


// 2.
// Project Creation & Deletion Starts Here
function createNewProject() {
    const value = document.getElementById('projectName').value
    // 1. Create the DOM List Element for the Sidebar
    projectListArray.push(value)
    localStorage.setItem('ProjectList', JSON.stringify(projectListArray))

    // 2. Create the Page for the newly created Project
        // a.  use the render page function
        // b.  put it's innerHTML into the local storage
}


function deleteProject(e) {
    projectListArray = JSON.parse(localStorage.getItem('ProjectList'))
    let text = e.target.parentNode.parentNode.firstChild.textContent

    // 1. Deleting the DOM List Element
    for (let i = 0; i < projectListArray.length; i++) {
        if (projectListArray[i] === text) {
            let x = projectListArray.indexOf(projectListArray[i])
            let newArr = projectListArray.splice(x, 1)
            localStorage.setItem('ProjectList', JSON.stringify(projectListArray))
        }
    }
}

// Project Creation & Deletion Ends Here


export { 
    createTodo, deleteTodo, editTodo, todoArray, saveInputInfo, 
    index, createTodo2, dayArray, deleteDayList, editDayList, 
    saveInputInfo2, projectPagesArray, projectListArray,
    createNewProject, deleteProject
}