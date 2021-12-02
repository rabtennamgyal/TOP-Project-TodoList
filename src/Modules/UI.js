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