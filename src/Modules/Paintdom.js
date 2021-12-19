// This module will take care of all the DOM related functionality.
import { Todo, Project, ProjectManager } from './Factory'
import { renderNewPage, renderPage, showPage, renderProjectListElement } from './domfuntions'


// Buttons to change Pages betwenn Inbox, Today & Projects.
const inboxBtn = document.querySelector('.inboxContainer')
const todayBtn = document.querySelector('.dayContainer')
const monthBtn = document.querySelector('.monthContainer')


// Create New Todolist Button
const createTodoList = document.getElementById('addList')
// Create New Project Button
const createProject = document.getElementById('addProject')


// Get the current page from the local storage.
let currentPage = localStorage.getItem('Page')
// & append it to the DOM.
showPage(currentPage)



function createNewProject() {
    const title = document.getElementById('projectName').value
    const newProject = new Project(title)
    theProjectManager.addProject(newProject)
    renderProjectListElement(title)
}


createTodoList.addEventListener('click', () => {
    createNewList()
})


createProject.addEventListener('click', () => {
    createNewProject()
})



window.addEventListener('load', () => {
    if (!localStorage.getItem('Page')) {
        renderPage(renderNewPage('Inbox'))
    } else {
        return
    }
})


inboxBtn.addEventListener('click', () => {
    renderPage(renderNewPage('Inbox'))
})


todayBtn.addEventListener('click', () => {
    renderPage(renderNewPage('Today'))
})


monthBtn.addEventListener('click', () => {
    renderPage(renderNewPage('Month'))
})
