import'./sass/main.scss'

const btn = document.querySelector('.hamburger')


btn.addEventListener('click', () => {
    const menu = document.querySelector('.mobileMenu')
    const burger = document.querySelector('.burger')

    if (burger.classList.contains('open')) {
        burger.classList.remove('open')
        menu.classList.add('fadeOut')
        menu.classList.remove('fadeIn')
        //menu.style.animation = 'fadeOut 0.7s ease-in-out .1s forwards'
    } else {
        burger.classList.add('open')
        menu.classList.add('fadeIn')
        menu.classList.remove('fadeOut')
        //menu.style.animation = 'fadeIn 0.7s ease-in-out .2s forwards'
    }
})