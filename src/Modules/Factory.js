// This Module will take care of all the application logics
// 🔮
import Todo from "./TodoList"

// function to create new todo list
function createTodo() {
    const title = document.getElementById('todoTitle').value
    const description = document.getElementById('todoDescription').value
    const priority = document.getElementById('todoPriority').value
    const dueDate = document.getElementById('todoDueDate').value

    return new Todo(title, description, priority, dueDate)
}

// Array to store all the todo lists
let todoArray = []


export { createTodo, todoArray }