const enviar = document.querySelector("#enviar");
const input  = document.querySelector("#frase");
const result = document.querySelector("#result");


function contaOcorrencia(palavra, lista){
    let occur = 0;
    for(let i = 0; i <= lista.length; i++)
        if (palavra === lista[i])
            occur++;
    return occur;
}


function adicionaOcorrenciaNaTabela(palavra, ocorrencia){
    const secao            = document.createElement("tr");
    const campo_palavra    = document.createElement("td");
    const campo_ocorrencia = document.createElement("td");

    campo_palavra.textContent    = palavra;
    campo_ocorrencia.textContent = ocorrencia;
    secao.appendChild(campo_palavra);
    secao.appendChild(campo_ocorrencia);
    result.appendChild(secao)
}


function tuplificador(valor, index, list){
    return list.indexOf(valor) === index;
}


enviar.addEventListener("click", () =>{
    const frase      = input.value;
    const palavras   = frase.split(" ");
    const tupla_palavras = palavras.filter(tuplificador);

    tupla_palavras.forEach(palavra => {
        const ocorrencia = contaOcorrencia(palavra, palavras)
        adicionaOcorrenciaNaTabela(palavra, ocorrencia)
    });
})

