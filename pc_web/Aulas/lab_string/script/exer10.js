const enviar = document.querySelector("#enviar");
const data01 = document.querySelector("#data-1");
const data02 = document.querySelector("#data-2");
const result = document.querySelector("#result");


enviar.addEventListener("click", () => {
    const data1 = new Date(data01.value);
    const data2 = new Date(data02.value)
    const distanciaSemana = ((data2 - data1) / 7 / 24 / 60 / 60 / 1000);

    result.innerHTML = `A distância entre as datas é de aproximadamente ${Math.round(distanciaSemana)} semanas`;
})

