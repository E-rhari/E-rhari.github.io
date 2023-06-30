const funCallBack = dado => {
    console.dir(dado)
}

//////CALLBACK//////
// const getUser = (id, funCallBacki) => {
//     const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//     let resultado = ""
    
//     const xhttp = new XMLHttpRequest()
//     xhttp.open('get', url)
//     xhttp.send()

//     xhttp.onreadystatechange = function() {
//         if(this.readyState == 4 && this.status == 200)
//             resultado = this.statusText
//             funCallBacki(resultado)
//     }
// }


//////FETCH OBJECT////////
// const getUser = id => {
//     let resultado;
//     const url = `https://jsonplaceholder.typicode.com/users/${id}`;

//     fetch(url)
//     .then(resposta => resposta.json())
//     .then(dados => console.log(dados))
//     .catch(erro => console.log(erro))
// }


////ASUNC AWAiT//////
const getUser = async id => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const resposta = await fetch(url);
    const dados = await resposta.json();
    console.log(dados)
}


//////ASYNC//////
// const getUser()

getUser(1)
getUser(2)
getUser(3)
getUser(4)
console.log("1");
console.log("2");
console.log("3");