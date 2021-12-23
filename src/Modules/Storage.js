
import { allProjectArray } from "./Paintdom"


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
const editList = (index, editedList) => {
    console.log(allProjectArray[index].todos)
}



const setOption = () => {
    console.log('options')
}


export { setCurrentTitle, setProject, delProject, setList, delList, editList, setOption }