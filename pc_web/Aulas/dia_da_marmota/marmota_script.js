const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const game = document.querySelector(".game");
let clickActive = false;


const selecionaBuraco = () => Math.floor(Math.random() * 6);

const tiraMarmota = (numeroBuraco) =>{
    const buraco = holes[numeroBuraco];
    buraco.classList.remove("up");
}

const brotaMarmota = (numeroBuraco) =>{
    const buraco = holes[numeroBuraco];
    buraco.classList.add("up");
    clickActive = false;
}

const marmotation = (numeroBuraco) => {
    brotaMarmota(numeroBuraco);
    setTimeout(()=>{tiraMarmota(numeroBuraco)}, 1000);
}

function startGame(){
    let gameTimer = 400;
    let intervalo = setInterval(()=>{
        const num = selecionaBuraco();
        marmotation(num);}, gameTimer)
    setTimeout(() => {clearInterval(intervalo)}, 16000)
}

game.addEventListener("click", (evento)=>{
    if('mole' == evento.target.classList[0])
        if(!clickActive){
            evento.target.parentNode.classList.remove("up");
            scoreBoard.innerHTML = parseInt(scoreBoard.innerHTML) + 1;
            clickActive = true;
    }
})

