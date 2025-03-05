document.addEventListener("DOMContentLoaded", function () {
    let nomes = [];
    function adicionarAmigo() {
        let nomeInput = document.getElementById("amigo");
        let nome = nomeInput.value.trim();
        if (nome === "") {
            alert("Ola, Insira um nome valido");
            return;
        }
        nomes.push(nome);
        atualizarLista();
        nomeInput.value = "";
    }

    function atualizarLista() {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        nomes.forEach(nome => {
            let li = document.createElement("li");
            li.textContent = nome;
            lista.appendChild(li);
        });
    }

    function sortearAmigo() {
        if (nomes.length === 0) {
            alert("Adicione alguns nomes antes de sortear!");
            return;
        }
        let indiceSorteado = Math.floor(Math.random() * nomes.length);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "<li>Amigo Secreto: " + nomes[indiceSorteado] + "</li>";
    }
    window.adicionarAmigo = adicionarAmigo;
    window.sortearAmigo = sortearAmigo;
});
