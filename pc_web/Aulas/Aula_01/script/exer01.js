const btn = document.getElementById("enviar");


btn.onclick = function() {
    const fraseDom = document.getElementById("frase");
    let frase = fraseDom.value;
    let palavras = frase.split(" ");

    for(let i = 0; i<palavras.length; i++){
        let palavra = palavras[i]
        reversePalavra = ''
        for(let j = (palavra.length-1); j>=0; j--)
            reversePalavra += palavra[j] 
        console.log(reversePalavra)
        const resultado = document.getElementById("result")
        resultado.innerHTML += ` ${reversePalavra}`;
    }
}