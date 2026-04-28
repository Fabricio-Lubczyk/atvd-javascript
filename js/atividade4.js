const form = document.getElementById("form");
const input = document.getElementById("input");
const lista = document.getElementById("lista");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const li = document.createElement("li");
  li.textContent = input.value;

  const botao = document.createElement("button");
  botao.textContent = "Remover";

  botao.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(botao);
  lista.appendChild(li);

  input.value = "";
});

// ATIVIDADE 4 (base da atividade 3)
// ==============================

// Dentro do evento de adicionar item:

// 1. Criar o botão de remover
// → usar document.createElement()

// 2. Adicionar texto ao botão
// → exemplo: "Remover" ou "X"

// 3. Adicionar evento de clique no botão
// → quando clicar:
//    - remover o item da lista (li.remove())

// 4. Colocar o botão dentro do <li>
// → usar appendChild()