import TodoList from "./TodoList"

// This is for opening & closing the mobile menu
const btn = document.querySelector('.hamburger')

btn.addEventListener('click', () => {
    const menu = document.querySelector('.mobileMenu')
    const burger = document.querySelector('.burger')

    if (burger.classList.contains('open')) {
        burger.classList.remove('open')
        menu.classList.add('fadeOut')
        menu.classList.remove('fadeIn')
    } else {
        burger.classList.add('open')
        menu.classList.add('fadeIn')
        menu.classList.remove('fadeOut')
    }
})
// 🎈


// This is for opening & closing the input form
const addList = document.getElementById('addList')

addList.addEventListener('click', () => {
    const inputForm = document.querySelector('.inputForm')
    inputForm.style.display = 'grid'
    addList.style.display = 'none'
})
// 🎈


// Test 
const addBtn = document.getElementById('addBtn')
const delBtn = document.getElementById('delBtn')


addBtn.addEventListener('click', () => {
    const input = document.getElementById('input')

    if (input.value) {
        const listContainer = document.querySelector('.listContainer')
        listContainer.style.display = 'flex'

        // 0. Creating Box to contains all the list related datas
        const newListBox = document.createElement('div')
        newListBox.classList.add('newBoxStyle')

        // 1. Creating the list 
        const newList = document.createElement('p')
        newList.classList.add('newListStyle')
        newList.textContent = input.value

        // 1. Creating the list description
        const newDesc = document.createElement('div')
        newDesc.classList.add('newDescStyle')


        newListBox.appendChild(newList)
        newListBox.appendChild(newDesc)

        listContainer.appendChild(newListBox)

        const inputForm = document.querySelector('.inputForm')
        inputForm.style.display = 'none'
        addList.style.display = 'block'

        input.value = ''
    } else {
        alert('Add a new list')
    }
})

delBtn.addEventListener('click', () => {
    const inputForm = document.querySelector('.inputForm')
    inputForm.style.display = 'none'
    addList.style.display = 'block'

    const listContainer = document.querySelector('.listContainer')
    listContainer.style.display = 'none'
})

//