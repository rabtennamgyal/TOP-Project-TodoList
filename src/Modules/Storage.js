import { allProjectArray, allOptions } from "./Paintdom"


const setCurrentTitle = (title) => {
    localStorage.setItem('CurrentTitle', title)
}


// #Function to save project in localstorage
const setProject = (project, allProjects) => {
    allProjectArray.push(project)
    localStorage.setItem('AllProject', JSON.stringify(allProjects))
}


// #Function to delete project from localstorage
const delProject = (projectTitle) => {
    let allProjectArray = JSON.parse(localStorage.getItem('AllProject')).filter(el => el.title !== projectTitle)
    localStorage.setItem('AllProject', JSON.stringify(allProjectArray))
}


// #Function to save list in localstorage
const setList = (index, newTodo) => {
    allProjectArray[index].todos.push(newTodo)
    localStorage.setItem('AllProject', JSON.stringify(allProjectArray))
}


// #Function to delete list from localstorage
const delList = (index, listTitle) => {
    let changedTodos = allProjectArray[index].todos.filter(el => el.title !== listTitle)
    allProjectArray[index].todos = changedTodos
    localStorage.setItem('AllProject', JSON.stringify(allProjectArray))
}


// #Function to edit list in localstorage
const editList = (index, editedList, editedIndex) => {
    let changedTodos = allProjectArray[index].todos
    let newArr = changedTodos.splice(editedIndex, 1, editedList)
    allProjectArray[index].todos = changedTodos
    localStorage.setItem('AllProject', JSON.stringify(allProjectArray))
}


// #Function to save options in localstorage
const setOption = (options) => {
    allOptions.push(options)
    localStorage.setItem('AllOptions', JSON.stringify(allOptions))
}


// #Function to delete options from localstorage
const delOptions = (options) => {
    let allOptions = JSON.parse(localStorage.getItem('AllOptions')).filter(el => el !== options)
    localStorage.setItem('AllOptions', JSON.stringify(allOptions))
}


export { setCurrentTitle, setProject, delProject, setList, delList, editList, setOption, delOptions }