const fruits = ["banana", "orange", "apple"];
fruits.push("cupuaçu");
console.log(fruits);

// Jeito inapropriado e burro de adicionar elementos
fruits[fruits.length] = "açaí"
console.log(fruits)

fruits.unshift("acerola")
console.log(fruits)
console.log(fruits)
fruits.shift("acerola")
console.log(fruits)

fruits.splice(2, 1, "maçã")
console.log(fruits)

fruits["favorite"] = "melancia"
console.log(fruits["favorite"])

fruits.forEach((fruit) => {
    console.log(fruit)
})


const testeReduce = [1,2,3,4,5]
let soma = testeReduce.reduce((acumulador, elemento) => 
                                acumulador + elemento, 0)
console.log(soma)