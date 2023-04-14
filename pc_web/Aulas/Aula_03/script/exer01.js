const numbers = [1,2,3,4,5];


function sum(list){
    return list.reduce((acummulator, element) => acummulator + element);
}


function odds(list){
    return list.reduce((acummulator, element) => {
        return (element %2 != 0) ? acummulator + element : acummulator;
    })
}


function product(list) {
    return list.reduce((acum, element) => acum * element, 1)
}

console.log(sum(numbers));
console.log(odds(numbers));
console.log(product(numbers));