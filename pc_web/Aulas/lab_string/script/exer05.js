const enviar      = document.querySelector("#enviar");
const frase_input = document.querySelector("#frase");
const procurado   = document.querySelector("#procurar");
const substituido = document.querySelector("#substituir");
const result      = document.querySelector("#result");


function criaString(lista){
    let string = lista[0];
    for(let i = 1; i <= lista.length - 1; i++){
        string += ` ${lista[i]}`;
    }
    return string;
}


function trocaPalavra(texto, procurar, substituir){
    const palavras   = texto.split(" ");

    const novaFrase = palavras.map(palavra => {
        if (procurar === palavra)
            palavra = substituir;
        return palavra;
    })
    return novaFrase;
}


enviar.addEventListener("click", () => {
    const frase      = frase_input.value;
    const procurar   = procurado.value;
    const substituir = substituido.value;

    const novaFrase = trocaPalavra(frase, procurar, substituir)
    result.innerHTML = criaString(novaFrase);
})
