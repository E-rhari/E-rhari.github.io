const input  = document.querySelector("#frase");
const result = document.querySelector("#result");


function procuraNoTexto(texto, procura){
    for(let i = 0; i <= texto.length; i++){
        if (procura.includes(texto[i]))
            return true;
        }
    return false;
}


function avaliaSenha(senha){
    const especiais  = ['@', '#', '!', '$', '%', '&', '_',
                        '*', '(', ')', '-', '+', '.', '=']
    const algarismos = ['1', '2', '3', '4', '5',
                        '6', '7', '8', '9', '0']
    
    if(procuraNoTexto(senha, algarismos)){
        if(procuraNoTexto(senha, especiais))
            return "forte";
        return "moderada";
        }
    return "fraca";
}


function forcaCor(forca){
    if (forca === "forte")
        return "#1aa11a";
    if (forca === "moderada")
        return "#ffa30f";
    if (forca === "fraca")
        return "#b51414";
    return "white";
}


input.addEventListener("input", () => {
    const texto = input.value;
    const forca = avaliaSenha(texto);

    input.style.backgroundColor = forcaCor(forca);
    result.innerHTML = forca;
})