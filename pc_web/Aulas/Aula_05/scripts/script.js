const btn = document.querySelector("#executar");


btn.addEventListener("click", () =>{
    const cep = document.querySelector("#cep").value
    const endereco = document.querySelector("#endereco")

    //criar um objeto XMLHttpRequest
    const xhttp = new XMLHttpRequest();

    //configurar objeto
    let url = `https://api.postmon.com.br/v1/cep/${cep}`;

    xhttp.open("GET", url);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            endereco.innerHTML = this.responseText
        }
    }
});