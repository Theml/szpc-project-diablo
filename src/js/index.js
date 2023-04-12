/* 
	OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    - passo 1 - dar um jeito de pegar o elemento HTML dos botões

	- passo 2 - dar um jeito de identificar o clique do usuário no botão

	- passo 3 - desmarcar o botão selecionado anterior

	- passo 4 - marcar o botão clicado como se estivesse selecionada

	- passo 5 - esconder a imagem de fundo anterior

	- passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

// passo 1 - dar um jeito de pegar o elemento HTML dos botões
const descricoes = document.querySelectorAll('.descricao');
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // passo 3 - desmarcar o botão selecionado anterior      
        desativarBotaoSelecionado();

        // passo 4 - marcar o botão clicado como se estivesse selecionado
        selecionarBotaoCarrosel(botao);

        // passo 5 - esconder a imagem ativa de fundo
        esconderImagemAtiva();

        // passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        mostrarImagemDeFundo(indice);

        //esconder a descrição
        esconderDescricao();

        // faz apareceer a descrição correspondente ao botão
        mostrarDescricao(indice);
    })
})

function mostrarDescricao(indice){
    descricoes[indice].classList.add('ativo');
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderDescricao() {
    const descricaoAtiva = document.querySelector('.ativo');
    descricaoAtiva.classList.remove('ativo');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

//possibilita o elemento de video ser passado até em caso de video vindo pelo youtube
var video = document.createElement('iframe')

video.width = 516;
video.height = 315;
video.src = 'https://www.youtube.com/embed/0SSYzl9fXOQ';
video.frameBorder = 0;
video.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';

var div = document.getElementById('video-player');
div.appendChild(video);
