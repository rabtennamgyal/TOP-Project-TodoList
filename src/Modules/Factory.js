// Factory Function to create todos
function Todo(title, description, priority, dueDate) {
    return {title, description, priority, dueDate}
}


function Project(title) {
    let todos = []

    const addTodo = (todo) => todos.push(todo)

    return {
        title, 
        addTodo
    }  
}


function ProjectManager(title) {
    let projectsArray = []

    const addProject = (project) => projectsArray.push(project)

    return {
        projectsArray,
        title,
        addProject
    }
}



export { Todo, Project, ProjectManager }


