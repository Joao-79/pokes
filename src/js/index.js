// objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua

// passo 1 - pegar no JS o elemtendo HTML correspondente ao botãode troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema")

// passo 2 - dar um jeito de pegar no JS o elemnteo HTML correspondente ao body
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

// passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {

    // passo 6 - verificar se o body já tem modo-escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro") 
    
body.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {

        // passo 7 - remover a classe do modo-escuro do body
        
        // passo 8 - trocar a imagem do botão de alterar tema pra sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/sun.png")

    } else {// passo 4 - adicionar o modo-escuro no body
        
        // passo 5 - trocar iamgem do botão de alterar tema pra lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/moon.png")

    }
});


