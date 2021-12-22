import { allProjectArray } from "./Paintdom"


const setCurrentTitle = (title) => {
    localStorage.setItem('CurrentTitle', title)
}


const setProject = (project, allProjects) => {
    allProjectArray.push(project)
    localStorage.setItem('AllProject', JSON.stringify(allProjects))
}


const delProject = (projectTitle) => {
    let allProjectArray = JSON.parse(localStorage.getItem('AllProject')).filter(el => el.title !== projectTitle)
    localStorage.setItem('AllProject', JSON.stringify(allProjectArray))
}


const setList = (index, newTodo) => {
    allProjectArray[index].todos.push(newTodo)
    localStorage.setItem('AllProject', JSON.stringify(allProjectArray))
}


export { setCurrentTitle, setProject, delProject, setList }