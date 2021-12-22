// This module will take care of all the DOM related functionality.
import { Todo, Project, ProjectManager } from './Factory'
import { 
    renderNewPage, renderPage, showPage, 
    renderProjectListElement, renderTodoListElement,
    cleanInput, deleteAll, createOptions
} from './domfuntions'
import { setCurrentTitle, setProject, delProject, setList } from './Storage'


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
// Rendering Project's Page
const ListElement = document.querySelector('.projectList')


// Get the current page from the local storage.
let currentPage = localStorage.getItem('Page')
let currentTitle = localStorage.getItem('CurrentTitle') ? localStorage.getItem('CurrentTitle') : 'Inbox'
// & append it to the DOM.
showPage(currentPage)


// 1. The Project Manager
const myProjectManager = new ProjectManager('myProjectManager')

// 2. Array of all Project
//localStorage.setItem('AllProject', [])
let allProjectArray = localStorage.getItem('AllProject') ? JSON.parse(localStorage.getItem('AllProject')) : myProjectManager.projectsArray


// #Rendering All Project Titles on Sidebar
allProjectArray.forEach(el => {
    renderProjectListElement(el.title)
})


// #Rendering all the todolist
allProjectArray.forEach(element => {
    if (element.title === currentTitle) {
        element.todos.forEach(el => {
            renderTodoListElement(el.title, el.description, el.priority, el.duedate)
        })
    }
})


function todolistCreation() {
    const projectTitle = document.getElementById('todoProjects').value
    const allTitles = allProjectArray.map(el => el.title)

    const todoTitle = document.getElementById('todoTitle').value
    const todoDescription = document.getElementById('todoDescription').value
    const todoPriority = document.getElementById('todoPriority').value
    const todoDueDate = document.getElementById('todoDueDate').value

    const parent = document.querySelector('.pageContent')


    for (let i = 0; i < allTitles.length; i++) {
        if (allTitles[i] === projectTitle) {
            const newTodo = Todo(todoTitle, todoDescription, todoPriority, todoDueDate)
            setList(i, newTodo)
            deleteAll(parent)
            allProjectArray.forEach(element => {
                if (element.title === currentTitle) {
                    element.todos.forEach(el => {
                        renderTodoListElement(el.title, el.description, el.priority, el.duedate)
                    })
                }
            })
            // Need to render existing page probably
            renderPage(renderNewPage(allTitles[i]))
            //renderTodoListElement(todoTitle, todoDescription, todoPriority, todoDueDate)
        }
    }
}


function projectCreation(value) {
    if (value) {
        const newProject = Project(value)
        setProject(newProject, allProjectArray)
    } else {
        const projectTitle = document.querySelector('.projectName').value
        const newProject = Project(projectTitle)
        setProject(newProject, allProjectArray)
        renderProjectListElement(projectTitle)
        createOptions(projectTitle)
    }
}


function projectDeletion(e) {
    const list = e.target.parentNode.parentNode
    const projectTitle = e.target.parentNode.parentNode.firstChild.textContent
    delProject(projectTitle)
    list.parentNode.removeChild(list)
}


function createDefaultProjects() {
    if (allProjectArray.length >= 3) {
        return
    } else {
        projectCreation('Inbox')
        projectCreation('Today')
        projectCreation('Month')
    }
}


createDefaultProjects()


// #Rendering Project Page
window.addEventListener('load', () => {
    if (!localStorage.getItem('Page')) {
        renderPage(renderNewPage('Inbox'))
        setCurrentTitle('Inbox')
        allProjectArray.forEach(element => {
            if (element.title === currentTitle) {
                element.todos.forEach(el => {
                    renderTodoListElement(el.title, el.description, el.priority, el.duedate)
                })
            }
        })
    } else {
        return
    }
})


inboxBtn.addEventListener('click', () => {
    renderPage(renderNewPage('Inbox'))
    setCurrentTitle('Inbox')
    currentTitle = 'Inbox'
    allProjectArray.forEach(element => {
        if (element.title === currentTitle) {
            element.todos.forEach(el => {
                renderTodoListElement(el.title, el.description, el.priority, el.duedate)
            })
        }
    })
})


todayBtn.addEventListener('click', () => {
    renderPage(renderNewPage('Today'))
    setCurrentTitle('Today')
    currentTitle = 'Today'
    allProjectArray.forEach(element => {
        if (element.title === currentTitle) {
            element.todos.forEach(el => {
                renderTodoListElement(el.title, el.description, el.priority, el.duedate)
            })
        }
    })
})


monthBtn.addEventListener('click', () => {
    renderPage(renderNewPage('Month'))
    setCurrentTitle('Month')
    currentTitle = 'Month'
    allProjectArray.forEach(element => {
        if (element.title === currentTitle) {
            element.todos.forEach(el => {
                renderTodoListElement(el.title, el.description, el.priority, el.duedate)
            })
        }
    })
})


ListElement.addEventListener('click', (e) => {
    if (e.target.classList.contains('list')) {
        const projectTitle = e.target.firstChild.textContent
        renderPage(renderNewPage(projectTitle))
        setCurrentTitle(projectTitle)
        currentTitle = projectTitle
        allProjectArray.forEach(element => {
            if (element.title === currentTitle) {
                element.todos.forEach(el => {
                    renderTodoListElement(el.title, el.description, el.priority, el.duedate)
                })
            }
        })
    }
})


// #todoList Creation
createTodoList.addEventListener('click', () => {
    todolistCreation()
    cleanInput()
})


// #Project Creation
createProject.addEventListener('click', () => {
    projectCreation()
})


// #Project Deletion
deleteProject.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteProjectBtn')) {
        projectDeletion(e)
        renderPage(renderNewPage('Inbox'))
        // Maybe need to also delete the options value
    }
})



export { allProjectArray }

