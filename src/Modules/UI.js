import { cleanInput } from "./HelperFunctions"

// Project list animation
const arrow = document.getElementById('arrow')

arrow.addEventListener('click', () => {
    const projectList = document.querySelector('.projectList')

    if (projectList.classList.contains('slideDown')) {
        projectList.classList.remove('slideDown')
        projectList.classList.add('slideUp')
        arrow.classList.remove('rotateDown')
    } else {
        projectList.classList.add('slideDown')
        projectList.classList.remove('slideUp')
        arrow.classList.add('rotateDown')
    }
})


// Side bar animation ( for desktop )
const navSpan = document.getElementById('spann')

navSpan.addEventListener('click', () => {
    const mainContent = document.getElementById('mainContent')
    const sideBarOne = document.querySelector('.sideBarOne')
    const sideBarTwo = document.querySelector('.sideBarTwo')

    if (mainContent.classList.contains('slideLeft')) {
        mainContent.classList.remove('slideLeft')
        sideBarOne.style.display = 'flex'
        sideBarTwo.style.display = 'flex'
    } else {
        mainContent.classList.add('slideLeft')
        sideBarOne.style.display = 'none'
        sideBarTwo.style.display = 'none'
    }
})


// Side bar animation ( for mobile )
const spanPhone = document.getElementById('spanPhone')

spanPhone.addEventListener('click', () => {
    const sideBar = document.querySelector('.sideBar')

    if (sideBar.classList.contains('slideLeftPhone')) {
        sideBar.classList.remove('slideLeftPhone')
    } else {
        sideBar.classList.add('slideLeftPhone')
    }
})


// Insert current date in the svg
const todaySvg = document.getElementById('todayDate')

const date = new Date()
todaySvg.textContent = date.getUTCDate()


// Open & Close Module
const module = document.querySelector('.module')
const module2 = document.querySelector('.module2')
// Open Modal Buttons
const plusIcon = document.getElementById('plusIcon')

// Close Modal Buttons
const add = document.getElementById('addList')
const edit = document.getElementById('editList')
const cancel = document.getElementById('cancelList')

const add2 = document.getElementById('addList2')
const edit2 = document.getElementById('editList2')
const cancel2 = document.getElementById('cancelList2')


// plusIcon & newListBtn are two different btns but serves the same purpose.
plusIcon.addEventListener('click', () => {
    module.style.display = 'grid'
    add.style.display = 'block'
    edit.style.display = 'none'
})


function setBtnOne() {
    if(document.getElementById('newListBtn')) {
        const btn = document.getElementById('newListBtn') 
        btn.addEventListener('click', () => {
            module.style.display = 'grid'
            add.style.display = 'block'
            edit.style.display = 'none'
        })
    }
}


function setBtnTwo() {
    if (document.getElementById('newListBtn2')) {
        const btn = document.getElementById('newListBtn2') 
        btn.addEventListener('click', () => {
            module2.style.display = 'grid'
            add2.style.display = 'block'
            edit2.style.display = 'none'
        })
    }
}


setInterval(() => {
    setBtnOne()
    setBtnTwo()
})


add.addEventListener('click', () => {
    module.style.display = 'none'
})


edit.addEventListener('click', () => {
    module.style.display = 'none'
})


cancel.addEventListener('click', () => {
    module.style.display = 'none'
    cleanInput()
})

add2.addEventListener('click', () => {
    module2.style.display = 'none'
})


edit2.addEventListener('click', () => {
    module2.style.display = 'none'
})


cancel2.addEventListener('click', () => {
    module2.style.display = 'none'
    cleanInput()
})

// new project button
const module3 = document.querySelector('.sideBarModule')
const newProject = document.getElementById('addProject')

newProject.addEventListener('click', () => {
    module3.style.display = 'none'
})

// For opening SideBar Project Module 
const newProjectIcon = document.getElementById('newProjectIcon')
const cancelProject = document.getElementById('cancelProject')

newProjectIcon.addEventListener('click', () => {
    const projectModule = document.querySelector('.sideBarModule')
    const projectInput = document.getElementById('projectName')
    projectModule.style.display = 'grid'
    projectInput.value = ''
})

cancelProject.addEventListener('click', () => {
    const projectModule = document.querySelector('.sideBarModule')    
    const projectInput = document.getElementById('projectName')
    projectModule.style.display = 'none'
    projectInput.value = ''
})
