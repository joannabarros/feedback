let botoes = document.querySelectorAll(".botoes button")
botoes.forEach(botao => {
    botao.addEventListener("click" , guardaNota)
})

function guardaNota(evento) {
    let nota = evento.target.innertext

    localStorage.setItem("nota", nota)
}