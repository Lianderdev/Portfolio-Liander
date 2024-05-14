const AbrirMenuMobile = document.querySelector('.button-menu-mobile')
const FecharMenuMobile = document.querySelector('.fechar-menu-mobile')
const MenuNavegaçao = document.querySelector('.menu-nav')


AbrirMenuMobile.addEventListener('click', () => {
    MenuNavegaçao.classList.add('abrir-menu')
})

FecharMenuMobile.addEventListener('click', () => {
    MenuNavegaçao.classList.remove('abrir-menu')
})
