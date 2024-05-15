const AbrirMenuMobile = document.querySelector('.button-menu-mobile')
const FecharMenuMobile = document.querySelector('.fechar-menu-mobile')
const MenuNavegaçao = document.querySelector('.menu-nav')
const overlay = document.querySelector('.overlay')


AbrirMenuMobile.addEventListener('click', () => {
    MenuNavegaçao.classList.add('abrir-menu')
    overlay.style.display = 'block'
})

FecharMenuMobile.addEventListener('click', () => {
    MenuNavegaçao.classList.remove('abrir-menu')
    overlay.style.display = 'none'
})

overlay.addEventListener('click', () => {
    MenuNavegaçao.classList.remove('abrir-menu')
    overlay.style.display = 'none'
})