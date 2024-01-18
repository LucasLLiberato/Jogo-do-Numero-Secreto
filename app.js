//    let titulo = document.querySelector('h1');
//    titulo.innerHTML = 'Pau Genial The Game';
//
//    let paragrafo = document.querySelector('p')
//    paragrafo.innerHTML = 'Escolha um número entre 1 e 10'

let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
console.log(`Número secreto ${numeroSecreto}`)
let numeroTentativas = 1

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value
    console.log(numeroSecreto == chute);
    let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'You win!')
        exibirTextoNaTela('p', `Parabéns, você acertou o número secreto com ${numeroTentativas} ${palavraTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute < numeroSecreto) {
        exibirTextoNaTela('p', 'É um número maior!');
        limparCampo();
    } else {
        exibirTextoNaTela('p', 'É um número menor!');
        limparCampo();  
    }
    numeroTentativas ++;
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo de Adivinhar');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length;

    if (quantidadeDeNumerosSorteados == numeroLimite) {
        listaDeNumerosSorteados = [];
    }    

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    numeroTentativas = 1;
    limparCampo();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}