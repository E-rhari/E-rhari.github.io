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


function contaLetras(lista){
    let total = 0
    lista.forEach(palavra => {
        for(let i = 0; i <palavra.length; i++)
            total++;
    })
    return total;
}


enviar.addEventListener("click", () =>{
    const frase    = input.value;
    const palavras = frase.split(" ");
    let maior = [1,'']

    palavras.forEach(palavra => {
        const ocorrencia = contaOcorrencia(palavra, palavras)
        if(ocorrencia >= maior[0]){
            maior[1] = palavra;
            maior[0] = ocorrencia;
        }
        
        result.innerHTML = 
        `Palavra mais frequente: ${maior[1]}<br>
        Ocorreu: ${maior[0]} vezes<br>
        Total de palavras: ${palavras.length}<br>
        Total de letras: ${contaLetras(palavras)}
        `;
    });
})
