const form = document.getElementById("form");
const input = document.getElementById("input");
const lista = document.getElementById("lista");

function criarTarefa(texto) {
  const li = document.createElement("li");
  li.textContent = texto;

  const botao = document.createElement("button");
  botao.textContent = "Remover";

  botao.addEventListener("click", function () {
    li.remove();
    salvar();
  });

  li.appendChild(botao);
  lista.appendChild(li);
}

function salvar() {
  const itens = document.querySelectorAll("#lista li");
  const tarefas = [];

  itens.forEach(li => {
    const texto = li.firstChild.textContent;
    tarefas.push(texto);
  });

  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const texto = input.value.trim();
  if (texto === "") return;

  criarTarefa(texto);
  salvar();

  input.value = "";
});

document.addEventListener("DOMContentLoaded", function () {
  const dados = localStorage.getItem("tarefas");

  if (!dados) return;

  const tarefas = JSON.parse(dados);

  tarefas.forEach(texto => {
    criarTarefa(texto);
  });
});

// ATIVIDADE 5 (base da atividade 3)
// ==============================

// PARTE 1 — Criar função para adicionar tarefas
// → função responsável por criar o <li>
// → reutilizar código da atividade 3

// PARTE 2 — Evento do botão "Adicionar"
// → usar addEventListener
// → pegar valor do input
// → chamar função que cria o <li>
// → limpar o input

// PARTE 3 — Salvar dados no localStorage
// → criar função salvar()
// → percorrer todos os <li>
// → pegar o texto de cada item
// → guardar em uma lista (array)
// → transformar em JSON (JSON.stringify)
// → salvar no localStorage

// PARTE 4 — Carregar dados ao abrir a página
// → usar: document.addEventListener("DOMContentLoaded")
// → buscar dados do localStorage
// → transformar JSON em lista (JSON.parse)
// → recriar os <li> na tela

// PARTE 5 — Atualizar sempre que mudar
// → chamar salvar() ao:
//    - adicionar item
//    - Carregar a página
