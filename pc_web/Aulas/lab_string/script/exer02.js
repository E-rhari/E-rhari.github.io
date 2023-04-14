const enviar = document.querySelector("#enviar");
const input  = document.querySelector("#frase");
const result = document.querySelector("#result");


function checkVogal(letra){
    const vogais = ['a','e','i','o','u',
                    'A','E','I','O','U',
                    'á','é','í','ó','ú',
                    'Á','É','Í','Ó','Ú',
                    'à','è','ì','ò','ù',
                    'À','È','Ì','Ò','Ù',
                    'ã','õ',
                    'Ã','Õ'];

    if (vogais.includes(letra))
        return true;
    return false
}


function negritificaFrase(frase){
    let ultima_e_vogal = false;
    let frase_final = "";

    for(let i = 0; i <= frase.length - 1; i++) {
        if (!checkVogal(frase[i])){
            if (ultima_e_vogal)
                frase_final += `</strong>${frase[i]}`;
            else
                frase_final += frase[i];
            ultima_e_vogal = false;
        }
        else{
            if (ultima_e_vogal)
                frase_final += frase[i];
            else
                frase_final += `<strong>${frase[i]}`;
            ultima_e_vogal = true;
        }}

    if(ultima_e_vogal)
        frase_final += `</strong>`;
    return frase_final;
}


enviar.addEventListener("click", () => {
    const frase = input.value;
    result.innerHTML = negritificaFrase(frase);
});