const carregaLista = lista => {
    return lista.reduce((acum, item) => acum += `<li>${item}</li>`, "");
    }

const carregaListaComTipo = (titulo, lista, tipo="ul") =>{
    let secao = ``;
    secao += `<h4>${titulo}</h4>`
    secao += `<${tipo}>`;
    secao += carregaLista(lista);
    secao += `</${tipo}>`;
    return secao
}

const getMedia = lista =>{
    let soma = lista.reduce((acum, opiniao) => {
        return acum + opiniao.rating;
    }, 0)
    return soma / lista.length;
}

const getEstrelas = (nota) => {
    let pEstrelas = ``;
    pEstrelas += `<p id="estrelas">`
        let i = 1;
        for(i; i <= 5; i++){
            if(nota >= 1)
                pEstrelas += `★`;
            else if(nota >= 0.5)
                pEstrelas += `✬`;
            else
                pEstrelas += `✩`;
            nota -= 1;
        }
        pEstrelas += `</p>`;
        return pEstrelas;
}

const coloreClassificacao = (classificacao) => {
    let classe ="";
        if( classificacao >= 18)
            classe = "vermelho";
        else if( classificacao >= 14)
            classe = "amarelo";
        else
            classe = "verde";
        tagClassificacao = "";
        tagClassificacao += `<p class="${classe} idade">`;
        tagClassificacao +=  classificacao == 0 ? "&nbsp;L&nbsp;" :  classificacao
        tagClassificacao += `</p>`
        return tagClassificacao;
}


const xhttp     = new XMLHttpRequest();
const url       = "https://rafaelescalfoni.github.io/desenv_web/filmes.json";
const filmesDiv = document.querySelector("#filmes");


xhttp.open("GET", url);
xhttp.send();

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        const filmesJson = JSON.parse(this.responseText);
        console.dir(filmesJson);

        filmesJson.forEach(filme => {
            let cardFilme = `<div class="filme">` 

            cardFilme += `<div class="top">`
            cardFilme += `<img src="${filme.figura}">`;
            cardFilme += `<div id="non-img-top">`
            cardFilme += `<h2>${filme.titulo}</h2>`;
            cardFilme += carregaListaComTipo("Gênero", filme.generos, "ul");
            cardFilme += `</div></div>`

            cardFilme += carregaListaComTipo("Elenco", filme.elenco, "ul");
            cardFilme += `<p>${filme.resumo}</p>`;

            cardFilme += `<div class="bottom">`
            cardFilme += coloreClassificacao(filme.classificacao);
            const notaMedia = getMedia(filme.opinioes)
            cardFilme += getEstrelas(notaMedia)
            cardFilme += `</div>`


            const semelhantes = filme.titulosSemelhantes.map(idFilme => filmesJson[idFilme-1].titulo)
            cardFilme += semelhantes.length > 0 ? carregaListaComTipo("Semelhantes", semelhantes, "ul") : ``;

            cardFilme += `</div>`;
            filmesDiv.innerHTML += cardFilme;
        })
    }
}


const aleatorio = Math.random()
console.log(aleatorio)
const piadas = [
                "Eu sei que parece, mas não distribuimos pornografia aqui",
                "Por razões legais, mudamos de nome",
                "Ovo da páscoa",
                "Asynchrounos JavaScript And XML flix",
                "A parte de assistir os vídeos ainda (não) está em desenvolimento<br>Sentimos muito e pedimos que aguarde",
                "'Netflix'? Nunca ouvi falar",
                "Socorro",
                "-. / . / ...- / . / .-. // --. / --- / -. / -. / .- // --. / .. / ...- / . // -.-- / --- / ..- // ..- / .--.",
                "A alternativa gratuita e com muito menos qualidade",
                "Se quer algo melhor, vai comprar",
                "Nós tentamos ter a liscensa de Family Guy, mas não conseguimos<br>Apartir dai paramos de ligar e só roubamos esse e todos os outros programas",
                "Desenvolvido por 'Eu! Chapolin Colorado!'<br> <audio controls autoplay src='./musica/chapolin.mp3'>* paam pam pam paaaaam pam paam pam pam pam *</audio>",
                "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>https://www.youtube.com/watch?v=dQw4w9WgXcQ</a>",
                "Eu não gosto muito de séries",
                "Chirashisushi",
                "[Insira piada aqui]",
                "Procrastinação",

]

const subtitulo = document.querySelector("#subtitulo");
for(let i = 1; i <= piadas.length; i++){
    console.log(i/piadas.length)
    if(aleatorio <= i/piadas.length){
        subtitulo.innerHTML = piadas[i - 1]
        break;
    }
}
