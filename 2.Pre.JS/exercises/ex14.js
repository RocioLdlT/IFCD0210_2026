// Crea una función que reciba un número por parámetros
// devuelva si el número recibido es un número primo.

function isPrime(n) {
    let result = true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            result = false;
            break;
            // return false
        }
    }
    return result;
}

console.log('7 es', isPrime(7) ? 'Primo' : 'No Prime')
console.log('21 es', isPrime(21)  ? 'Primo' : 'No Prime')
console.log('713 es', isPrime(7) ? 'Primo' : 'No Prime')
