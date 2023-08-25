const tabuleiro = [0,0,0,0,0,0,0,0,0];
const vitorias  = [
                    [0,1,2], [3,4,5], [6,7,8],
                    [0,3,6], [1,4,7], [2,5,8],
                    [1,4,8], [2,4,6]
                  ];

let simboloAtual   =    {"nome": "shrek",
                         "cod":  1};
let simboloPassado =    {"nome": "rato",
                         "cod": -1};


const casas = document.querySelectorAll(".casa");


function testaVitoria(jogador){
    vitorias.forEach(posicoes => {
        if(posicoes.every((posicao) => {
            // console.log(tabuleiro[posicao] == jogador);
            return tabuleiro[posicao] == jogador;
            })){
            return true}
        })
        return false
}


addEventListener("click", (evento)=> {
    const alvo = evento.target;
    if(alvo.classList.value == "casa")
        if(tabuleiro[alvo.id] == 0){
            alvo.firstElementChild.setAttribute("src", `./img/${simboloAtual.nome}.png`);
            tabuleiro[alvo.id] = simboloAtual.cod;

            console.log(tabuleiro)
            console.log(testaVitoria(simboloAtual.cod))
            let aux = simboloAtual;
            simboloAtual = simboloPassado;
            simboloPassado = aux;
        }
})