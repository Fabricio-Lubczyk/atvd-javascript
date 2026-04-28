const paragrafo = document.getElementById('paragrafo')
const botao = document.getElementById('botaop')

botao.addEventListener("click", function(){
    paragrafo.style.color = "blue";
})

const botaofundo = document.getElementById("mudar-fundo")
const body = document.getElementById("fundooo")

botaofundo.addEventListener("click", function(){
    body.style.backgroundColor = "black"
})
