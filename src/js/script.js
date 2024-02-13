const menu = document.getElementById("menu")
const btnAbrirMenu = document.getElementById("menu-btn")
const btnMostrarPlataforma = document.querySelectorAll("#btn-plataforma")

btnAbrirMenu.addEventListener("click", () => {
    menu.classList.toggle("ativo")
})

btnMostrarPlataforma.forEach(botao => {
    botao.addEventListener('click', () => {
        botao.firstElementChild.classList.toggle('ativo')
    })
})