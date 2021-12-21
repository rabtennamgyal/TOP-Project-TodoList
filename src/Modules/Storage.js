import { allProjectArray } from "./Paintdom"

const setProject = (project, allProjects) => {
    allProjectArray.push(project)
    localStorage.setItem('AllProject', JSON.stringify(allProjects))
}

const delProject = (projectTitle) => {
    let allProjectArray = JSON.parse(localStorage.getItem('AllProject')).filter(el => el.title !== projectTitle)
    localStorage.setItem('AllProject', JSON.stringify(allProjectArray))
}

export { setProject, delProject }