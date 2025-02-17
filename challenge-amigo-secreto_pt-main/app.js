//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

// Função para adicionar amigo no array e na lista.
function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;

    // Valicação de nome já adicionado.
    if (amigos.includes(nome)) {
        alert(`O nome ${nome} já foi adicionado`);

    // Validação caso input esteja vazio.
    } else if(nome == '') {
        alert("Insira um nome válido");

    // Caso passe nas validações...
    } else {
        amigos.push(nome);
        console.log(amigos);
        listaAmigos();
        limparCampo();
    }
}

// Adicionar o nome do amigo na lista HTML.
function listaAmigos() {

    //Adicionando o nome do amigo sem que haja duplicação.
    let listaAmigos = document.querySelector('#listaAmigos');
    let novoItem = document.createElement('li');
    novoItem.textContent = amigos[amigos.length - 1];
    listaAmigos.appendChild(novoItem);
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let index = parseInt(Math.random() * amigos.length);
        let amigoSecreto = amigos[index];
        let resultado = document.querySelector('#resultado');
        resultado.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSecreto}</li>`;
        
        limparCampo();
    } else {
        alert("Insira os nomes dos amigos para sortear");
    }
}

// Limpar o Input para adicionar amigo.
function limparCampo() {
    document.getElementById("amigo").value = "";
    document.getElementById("resultado").value = "";
}