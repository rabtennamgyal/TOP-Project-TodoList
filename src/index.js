import'./sass/main.scss'

const btn = document.querySelector('.hamburger')


btn.addEventListener('click', () => {
    const menu = document.querySelector('.mobileMenu')
    menu.style.display = 'grid'
    menu.style.height = '25rem'
})