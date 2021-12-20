// This module will take care of all the DOM related functionality.
import { Todo, Project, ProjectManager } from './Factory'
import { renderNewPage, renderPage, showPage, renderProjectListElement, renderTodoListElement } from './domfuntions'


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



const myProjectManager = new ProjectManager('myProjectManager')

myProjectManager.addProject(Project('Inbox'))
myProjectManager.addProject(Project('Today'))
myProjectManager.addProject(Project('Month'))



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
    myProjectManager.addProject(Project(projectTitle))
    renderProjectListElement(projectTitle)
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


// 1. Todolist & Project Creation Event Listeners
createTodoList.addEventListener('click', () => {
    todolistCreation()
})


createProject.addEventListener('click', () => {
    projectCreation()
})






// window.addEventListener('load', () => {
//     if (!localStorage.getItem('Page')) {
//         renderPage(renderNewPage('Inbox'))
//     } else {
//         return
//     }
// })