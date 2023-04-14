const input  = document.querySelector("#frase");
const result = document.querySelector("#result");


function tenisPolar(texto){
    const letras = texto.split("");
    const TENIS = ['T','E','N','I','S'];
    const POLAR = ['P','O','L','A','R'];
    let novoTexto = letras.slice();

    novoTexto = letras.map(letra => {
        for(let i = 0; i <= TENIS.length; i++){
            if(letra === TENIS[i])
                return POLAR[i];
            else if(letra === POLAR[i])
                return TENIS[i];
        }
        return letra;
    })
    return novoTexto;
}


input.addEventListener("input", () => {
    const frase = input.value;

    result.innerHTML = tenisPolar(frase);
})