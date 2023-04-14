const btn       = document.getElementById("enviar");
const fraseDom  = document.getElementById("frase");
const resultado = document.getElementById("result")


function invertePalavrasDeFrase(){
    let frase = fraseDom.value;
    let palavras = frase.split(" ");

    for(let i = 0; i<palavras.length; i++){
        let palavra = palavras[i];
        reversePalavra = '';

        for(let j = (palavra.length-1); j>=0; j--)
            reversePalavra += palavra[j];
    resultado.innerHTML += `${reversePalavra}`;
    }
}


btn.addEventListener("click", invertePalavrasDeFrase);