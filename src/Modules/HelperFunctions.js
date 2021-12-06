// Creating function to clean the input boxes.
function cleanInput() {
    const title = document.getElementById('todoTitle').value = ''
    const description = document.getElementById('todoDescription').value = ''
    const priority = document.getElementById('todoPriority').value = ''
    const dueDate = document.getElementById('todoDueDate').value  = ''
}

export { cleanInput }