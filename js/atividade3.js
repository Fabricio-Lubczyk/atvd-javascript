const textarea = document.getElementById("add-texto")
const botaoadd = document.getElementById("botao-add")
const lista = document.getElementById("lista")

botaoadd.addEventListener("click", function(){
    let textotextarea = textarea.value

    const li = document.createElement("li")
    li.textContent = textotextarea

    lista.appendChild(li)
    textarea.value = ""
})