// This module will take care of all the DOM related functionality.
import { Todo, Project, ProjectManager } from './Factory'
import { 
    renderNewPage, renderPage, showPage, 
    renderProjectListElement, renderTodoListElement,
    cleanInput, deleteAll, createOptions, renderOptions, renderAlert
} from './domfuntions'
import { setCurrentTitle, setProject, delProject, setList, setOption, delOptions, delList, editList } from './Storage'


// Buttons to change Pages betwenn Inbox, Today & Projects.
const homeIcon = document.getElementById('homeIcon')
const inboxBtn = document.querySelector('.inboxContainer')
const todayBtn = document.querySelector('.dayContainer')
const monthBtn = document.querySelector('.monthContainer')


// Create New Todolist Button
const createTodoList = document.getElementById('addList')
// Delete Todolist Button
const deleteTodoList = document.querySelector('.content')
// Edit Todolist Button
const editTodoList1 = document.querySelector('.content')
// 2. Button to edit the Todolist
const editTodoList2 = document.getElementById('editList')
// Create Project Button
const createProject = document.getElementById('addProject')
// Delete Project Button
const deleteProject = document.querySelector('.projectList')
// Rendering Project's Page
const ListElement = document.querySelector('.projectList')


// Get the current page from the local storage.
let editedIndex
let currentPage = localStorage.getItem('Page')
let currentTitle = localStorage.getItem('CurrentTitle') ? localStorage.getItem('CurrentTitle') : 'Inbox'
// & append it to the DOM.
showPage(currentPage)

// Input exist or not ?
let inputExist = false

// 1. The Project Manager
const myProjectManager = new ProjectManager('myProjectManager')

// 2. Array of all Project
//localStorage.setItem('AllProject', [])
let allProjectArray = localStorage.getItem('AllProject') ? JSON.parse(localStorage.getItem('AllProject')) : myProjectManager.projectsArray
// 3. Array of all options
let allOptions = localStorage.getItem('AllOptions') ? JSON.parse(localStorage.getItem('AllOptions')) : []

// #Rendering All Project Titles on Sidebar
allProjectArray.forEach(el => {
    renderProjectListElement(el.title)
})
// #Rendering all the todolist
allProjectArray.forEach(element => {
    if (element.title === currentTitle) {
        element.todos.forEach(el => {
            renderTodoListElement(el.title, el.description, el.priority, el.dueDate)
        })
    }
})
// #Rendering all options 
allOptions.forEach(element => {
    renderOptions(element)
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
            renderPage(renderNewPage(allTitles[i]))
            setCurrentTitle(projectTitle)
            currentTitle = projectTitle
            allProjectArray.forEach(element => {
                if (element.title === currentTitle) {
                    element.todos.forEach(el => {
                        renderTodoListElement(el.title, el.description, el.priority, el.dueDate)
                    })
                }
            })
        }
    }
}


function todoListDeletion(e) {
    const listTitle = e.target.parentNode.parentNode.childNodes[1].childNodes[1].textContent
    const allTitles = allProjectArray.map(el => el.title)

    for (let i = 0; i < allTitles.length; i++) {
        if (allTitles[i] === currentTitle) {
            delList(i, listTitle)
            const list = e.target.parentNode.parentNode.parentNode
            list.parentNode.removeChild(list)
        }
    }
}


function todoListEdition() {
    const allTitles = allProjectArray.map(el => el.title)

    const todoTitle = document.getElementById('todoTitle').value
    const todoDescription = document.getElementById('todoDescription').value
    const todoPriority = document.getElementById('todoPriority').value
    const todoDueDate = document.getElementById('todoDueDate').value
    const todoProjects = document.getElementById('todoProjects').value

    for (let i = 0; i < allTitles.length; i++) {
        if (allTitles[i] === currentTitle) {
            const editedList = Todo(todoTitle, todoDescription, todoPriority, todoDueDate)
            editList(i, editedList, editedIndex)      
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
        const newOptions = createOptions(projectTitle)
        const options = newOptions.innerHTML
        setOption(options)
    }
}


function projectDeletion(e) {
    const list = e.target.parentNode.parentNode
    const projectTitle = e.target.parentNode.parentNode.firstChild.textContent
    const selectBox = document.getElementById('todoProjects')
    // Deleting Project
    delProject(projectTitle)
    list.parentNode.removeChild(list)
    // Deleting Project's Options 
    delOptions(projectTitle)
    for (let i = 0; i < allOptions.length; i++) {
        if (allOptions[i] === projectTitle) {
            selectBox.remove(4 + i)
        }
    }
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


homeIcon.addEventListener('click', () => {
    renderPage(renderNewPage('Inbox'))
    setCurrentTitle('Inbox')
    currentTitle = 'Inbox'
    allProjectArray.forEach(element => {
        if (element.title === currentTitle) {
            element.todos.forEach(el => {
                renderTodoListElement(el.title, el.description, el.priority, el.dueDate)
            })
        }
    })
})


inboxBtn.addEventListener('click', () => {
    renderPage(renderNewPage('Inbox'))
    setCurrentTitle('Inbox')
    currentTitle = 'Inbox'
    allProjectArray.forEach(element => {
        if (element.title === currentTitle) {
            element.todos.forEach(el => {
                renderTodoListElement(el.title, el.description, el.priority, el.dueDate)
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
                renderTodoListElement(el.title, el.description, el.priority, el.dueDate)
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
                renderTodoListElement(el.title, el.description, el.priority, el.dueDate)
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
                    renderTodoListElement(el.title, el.description, el.priority, el.dueDate)
                })
            }
        })
    }
})


// #todoList Creation
createTodoList.addEventListener('click', (e) => {
    const todoTitle = document.getElementById('todoTitle').value
    const todoDescription = document.getElementById('todoDescription').value
    const todoPriority = document.getElementById('todoPriority').value
    const todoDueDate = document.getElementById('todoDueDate').value
    const projectTitle = document.getElementById('todoProjects').value

    if (!todoTitle || !todoDescription || !todoPriority || !todoDueDate || !projectTitle) {
        renderAlert()

        const btn = document.getElementById("removeAlert");
        btn.addEventListener("click", (e) => {
            const element = e.target.parentNode.parentNode
            element.parentNode.removeChild(element)
        });
    } else {
        todolistCreation()
        cleanInput()
    }
})


// #todolist Deletion
deleteTodoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        todoListDeletion(e)
    }
})


// #todolist Edition
// 1. Open the module to edit the list
editTodoList1.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit')) {
        const modules = document.querySelector('.module')
        const add = document.getElementById('addList')
        const edit = document.getElementById('editList')
        const inputFive = document.querySelector('.inputFive')

        modules.style.display = 'grid'
        add.style.display = 'none'
        edit.style.display = 'block'
        inputFive.style.display = 'none'

        const allTitles = allProjectArray.map(el => el.title)
        const text = e.target.parentNode.parentNode.childNodes[1].childNodes[1].textContent

        for (let i = 0; i < allTitles.length; i++) {
            if (allTitles[i] === currentTitle) {
                const arr = allProjectArray[i].todos
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].title === text) {
                        editedIndex = i
                        
                        const savedTitle = arr[i].title
                        const savedDescription = arr[i].description
                        const savedPriority = arr[i].priority
                        const savedDueDate = arr[i].dueDate

                        const todoTitle = document.getElementById('todoTitle').value = savedTitle
                        const todoDescription = document.getElementById('todoDescription').value = savedDescription
                        const todoPriority = document.getElementById('todoPriority').value = savedPriority
                        const todoDueDate = document.getElementById('todoDueDate').value = savedDueDate
                    }
                }
            }
        }
    }
})
// 2. Edit the actual todolist
editTodoList2.addEventListener('click', (e) => {
    const list = document.querySelector('.pageContent')
    todoListEdition()
    deleteAll(list)
    allProjectArray.forEach(element => {
        if (element.title === currentTitle) {
            element.todos.forEach(el => {
                renderTodoListElement(el.title, el.description, el.priority, el.dueDate)
            })
        }
    })
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
        setCurrentTitle('Inbox')
        currentTitle = 'Inbox'
        allProjectArray.forEach(element => {
            if (element.title === currentTitle) {
                element.todos.forEach(el => {
                    renderTodoListElement(el.title, el.description, el.priority, el.dueDate)
                })
            }
        })
    }
})


export { allProjectArray, allOptions }