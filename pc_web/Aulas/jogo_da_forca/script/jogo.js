const msg = new Array();
msg[0] = "Informe uma letra.";
msg[1] = "Parabéns, você acertou!";
msg[2] = "Errou! Preste mais atenção na próxima vez.";
msg[3] = "Ocorreu um erro, tente novamente.";
msg[4] = "Informe uma resposta.";
msg[5] = "Letra errada, tente outra.";

const imagem = new Array();
imagem[0] = "img/forca0.png";
imagem[1] = "img/forca1.png";
imagem[2] = "img/forca2.png";
imagem[3] = "img/forca3.png";
imagem[4] = "img/forca4.png";
imagem[5] = "img/forca5.png";
imagem[6] = "img/forca6.png";

//controles
const btnEscolherCategoria  = document.querySelector("#btnEscolherCategoria");
const btnTentar             = document.querySelector("#bntTentar");
const bntResponder          = document.querySelector("#bntResponder")

//variaveis
let letrasErradas, letrasCertas, palavraSorteada;

const sortearPalavra = lista => {
    //programe o sorteio de uma palavra aleatória
    let numElementos = lista.length;
    const INDICE_SORTEADO = Math.floor(Math.random() * (numElementos - 1));
    return lista[INDICE_SORTEADO]
}

const verificarLetra = (palavraSorteada, letra) => {
    if(palavraSorteada.includes(letra))
        return true;
    return false;
}

const escreveLetra = (palavraSorteada, letra, seletorPainel) => {
    const painel = document.querySelector(seletorPainel);
    palavraSorteada = palavraSorteada.toLowerCase()
    for(let i = 0; i < palavraSorteada.length; i++){
        console.log(palavraSorteada[i])
        if(letra == palavraSorteada[i])
            painel.childNodes[i].innerHTML = letra;
    }
}

const escreveQtdLetras = (palavra, seletor) => {
    const painel = document.querySelector(seletor)
    const letras = palavra.split("")

    painel.innerHTML = "";

    letras.forEach(letra => {
        const elemLi = document.createElement("li")
        painel.appendChild(elemLi)
    });
}

const atualizaForca = (seletor, estagio) => {
    const forca = document.querySelector(seletor);
    const img = `<img src="${imagem[estagio]}" alt="forca">`;
    forca.innerHTML = img;
}

btnEscolherCategoria.addEventListener("click", ()=>{
    const categoria = document.querySelector("#categoria").value;
    palavraSorteada = (categoria=="cidades")?sortearPalavra(municipios):sortearPalavra(frutas);

    escreveQtdLetras(palavraSorteada, "#painel");
    atualizaForca("#forca", 0)
    console.log(palavraSorteada)
})

btnTentar.addEventListener("click", () => {
    const letra = document.querySelector("#entradaLetra").value;
    escreveLetra(palavraSorteada, letra, "#painel");
})

bntResponder.addEventListener("click", ()=>{
    const letraEscolhida = document.querySelector("#entradaResposta").value;
    document.querySelector("#letraEscolhida").innerHTML += `  ${letraEscolhida}  `
})
