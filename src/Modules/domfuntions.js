// 🦚 This module contains all the functions that 
// deals with rendering on the DOM.


// 1. Function to create a new page 
const renderNewPage = (title) => {
    const Page = document.createElement('div')
    Page.classList.add('pageStyle')
    Page.innerHTML = `
        <div class="contentOne">
            <div class="contentOneOne">
                <h1 class='titleOfPage'>
                    ${title}
                </h1>
            </div>
            <div class="contentOneTwo">
                <svg id='newListButton' class="invert" width="24" height="24" viewBox="0 0 24 24">
                    <g fill="none" fill-rule="evenodd" transform="translate(4 3)">
                    <mask id="jd4FBg" fill="#fff">
                        <path
                        d="M9 8h7a.5.5 0 1 1 0 1H9v7a.5.5 0 1 1-1 0V9H1a.5.5 0 0 1 0-1h7V1a.5.5 0 0 1 1 0v7z"
                        ></path>
                    </mask>
                    <g mask="url(#jd4FBg)">
                        <path fill="currentColor" d="M-4-3h24v24H-4z"></path>
                    </g>
                    </g>
                </svg>
                <h1>
                    Add List
                </h1>
            </div>
        </div>
        
        <div class="pageContent">
        </div>
    `
    return Page
}


// RenderPage & ShowPage do similar things. But renderPage deals with the local storage.

// 2. Function to render a page to the dom
function renderPage(page) {
    const content = document.querySelector('.content')
    content.innerHTML = ''
    localStorage.setItem('Page', page.innerHTML)
    content.appendChild(page)
}


// 3. Function to show a page to the dom.
function showPage(el) {
    const content = document.querySelector('.content')
    content.innerHTML = ''
    const curPage = document.createElement('div')
    curPage.classList.add('pageStyle')
    curPage.innerHTML = el
    content.appendChild(curPage)
}


// 4. Function to create a new projectlist element
function renderProjectListElement(projectTitle) {
    if (projectTitle === 'Inbox' || projectTitle === 'Today' || projectTitle === 'Month') {
        return
    } else {
        const main = document.querySelector('.projectList')

        const list = document.createElement('div')
        list.classList.add('list')
        const divOne = document.createElement('p')
        divOne.textContent = projectTitle
        const divTwo = document.createElement('p')
        divTwo.classList.add('deleteProject')
        divTwo.innerHTML = '<h1 class="deleteProjectBtn">x</h1>'
        list.appendChild(divOne)
        list.appendChild(divTwo)
        
        main.appendChild(list)
    }
}


// 5. Function to create a new todolist element
function renderTodoListElement(title, description, priority, duedate) {
    const pageContent = document.querySelector('.pageContent')

    const todoElement = document.createElement('div')
    todoElement.classList.add('todoStyle')
    todoElement.innerHTML = `
        <div class='divOne'>
            <div class='divOneOne'>
                <p>${title}</p>
                <p>${priority}</p>
                <p>${duedate}</p>
            </div>
    
            <div class='divOneTwo'>
                <button class='delete' id='deleteTodo'>❌</button>
                <button class='edit' id='editTodo'>🔄</button>
            </div>
        </div>
        
        <div class='divTwo'>
            <p>${description}</p>
        </div>
    `

    pageContent.appendChild(todoElement)
}


// 6. Function to clean the input field
function cleanInput() {
    const todoTitle = document.getElementById('todoTitle').value = ''
    const todoDescription = document.getElementById('todoDescription').value = ''
    const todoPriority = document.getElementById('todoPriority').value = ''
    const todoDueDate = document.getElementById('todoDueDate').value = ''
    const projectTitle = document.getElementById('todoProjects').value = ''
}


// 7. Function to delete every dom element in a div
function deleteAll(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


// 8. Function to create new options 
function createOptions(projectTitle) {
    let allOptions = document.getElementById('todoProjects')

    let newOption = new Option(projectTitle, projectTitle)

    allOptions.add(newOption, null)
}



export { 
    renderNewPage, renderPage, showPage, renderProjectListElement, 
    renderTodoListElement, cleanInput, deleteAll, createOptions
}