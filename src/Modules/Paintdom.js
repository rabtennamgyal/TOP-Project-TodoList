// This module will take care of all the DOM related functionality.
import { Todo, Project, ProjectManager } from './Factory'
import { renderNewPage, renderPage, showPage, renderProjectListElement, renderTodoListElement } from './domfuntions'
import { setProject, delProject } from './Storage'

// Buttons to change Pages betwenn Inbox, Today & Projects.
const inboxBtn = document.querySelector('.inboxContainer')
const todayBtn = document.querySelector('.dayContainer')
const monthBtn = document.querySelector('.monthContainer')


// Create New Todolist Button
const createTodoList = document.getElementById('addList')
// Create Project Button
const createProject = document.getElementById('addProject')
// Delete Project Button
const deleteProject = document.querySelector('.projectList')


// Get the current page from the local storage.
let currentPage = localStorage.getItem('Page')
// & append it to the DOM.
showPage(currentPage)


// 1. The Project Manager
const myProjectManager = new ProjectManager('myProjectManager')

// 2. Array of all Project
let allProjectArray = localStorage.getItem('AllProject') ? JSON.parse(localStorage.getItem('AllProject')) : myProjectManager.projectsArray


allProjectArray.forEach(el => {
    renderProjectListElement(el.title)
})


function todolistCreation() {
    const projectTitle = document.getElementById('todoProjects').value
    const allTitles = myProjectManager.projectsArray.map(el => el.title)

    const todoTitle = document.getElementById('todoTitle').value
    const todoDescription = document.getElementById('todoDescription').value
    const todoPriority = document.getElementById('todoPriority').value
    const todoDueDate = document.getElementById('todoDueDate').value


    for (let i = 0; i < allTitles.length; i++) {
        if (allTitles[i] === projectTitle) {
            myProjectManager.projectsArray[i].addTodo(Todo(todoTitle, todoDescription, todoPriority, todoDueDate))
            renderPage(renderNewPage(allTitles[i]))
            renderTodoListElement(todoTitle, todoDescription, todoPriority, todoDueDate)
        }
    }
}


function projectCreation() {
    const projectTitle = document.querySelector('.projectName').value
    const newProject = Project(projectTitle)
    setProject(newProject, allProjectArray)
    renderProjectListElement(projectTitle)
}


function projectDeletion(e) {
    const list = e.target.parentNode.parentNode
    const projectTitle = e.target.parentNode.parentNode.firstChild.textContent
    delProject(projectTitle)
    list.parentNode.removeChild(list)
}


inboxBtn.addEventListener('click', () => {
    renderPage(renderNewPage('Inbox'))
})


todayBtn.addEventListener('click', () => {
    renderPage(renderNewPage('Today'))
})


monthBtn.addEventListener('click', () => {
    renderPage(renderNewPage('Month'))
})


// #todoList Creation
createTodoList.addEventListener('click', () => {
    todolistCreation()
})

// #Project Creation
createProject.addEventListener('click', () => {
    projectCreation()
})

// #Project Deletion
deleteProject.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteProjectBtn')) {
        projectDeletion(e)
    }
})




export { allProjectArray }




// window.addEventListener('load', () => {
//     if (!localStorage.getItem('Page')) {
//         renderPage(renderNewPage('Inbox'))
//     } else {
//         return
//     }
// })
