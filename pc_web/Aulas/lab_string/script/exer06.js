const enviar = document.querySelector("#enviar");
const input  = document.querySelector("#data");
const result = document.querySelector("#result");


function validaNumero(variavel){
    if (isNaN(variavel))
        return false;
    return true;
}


function converteData(data){
    const dataName = ["erro", "janeiro", "fevereiro", "março", 
                      "abril","maio", "junho", "julho", "agosto", 
                      "setembro", "outubro", "novembro", "dezembro"];
    const dataLista = data.split("/");

    if (!dataLista.every(validaNumero))
        return "erro";
    if(dataLista[1] <= 0 || dataLista[1] >12)
        return dataName[0];

    let dataString = `${dataLista[0]} de `
    dataString += dataName[Number(dataLista[1])];
    dataString += ` de ${dataLista[2]}`;
    return dataString;
}


enviar.addEventListener("click", () => {
    const data = input.value;

    dataString = converteData(data);
    result.innerHTML = dataString;
})
