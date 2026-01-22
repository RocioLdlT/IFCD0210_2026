// Crea una función que reciba un número como parámetro y
// retorne si el número dado es par o impar.

function isEvenOdd(n) {
    let result
    if(n%2 === 0){
        result = 'Par'
    } else {
        result = 'Impar'
    }
    return result
}

function isEvenOdd2(n) {
    let result = 'Impar'
    if(n%2 === 0){
        result = 'Par'
    } 
    return result
}


// Operator ternario
function isEvenOdd3(n) {
    let result = (n%2 === 0) ? 'Par' : 'Impar'
    return result
}

console.log(isEvenOdd2(21))
console.log(isEvenOdd2(22))
