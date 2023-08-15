const headerNavigation = document.getElementsByClassName('header__nav')[0]
const burgerMenu = document.getElementsByClassName('header__burger-menu')[0]

burgerMenu.addEventListener('click', (event) => {
    burgerMenu.classList.toggle('burger-active')
    headerNavigation.classList.toggle('menu-active')
})

headerNavigation.addEventListener('click', (event)=> {
    if (document.getElementsByClassName('menu-active')) {
        burgerMenu.classList.toggle('burger-active')
        headerNavigation.classList.toggle('menu-active')
    }
})