// Factory Function to create todos
function Todo(title, description, priority, dueDate) {
    return {title, description, priority, dueDate}
}


function Project(title) {
    let todos = []

    return {
        todos,
        title
    }  
}


function ProjectManager(title) {
    let projectsArray = []

    return {
        projectsArray,
        title
    }
}



export { Todo, Project, ProjectManager }