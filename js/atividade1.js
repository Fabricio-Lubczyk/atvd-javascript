const titulo = document.getElementById('titulo')
const botao = document.getElementById('botao')

botao.addEventListener("click", function(){
    titulo.innerText = "Outro texto"

    if(titulo.innerText == "Outro texto"){
        titulo.innerText = "AAAAAAAAAAA"
    }else{
        titulo.innerText = "Outro texto"
    }
})