// Adivina el número
// Crea una función que primero guarde en una variable un número aleatorio del 1 al 10.
// Después, pregunte al usuario a través de un prompt un número del 1 al 10.
// Una vez recibida la respuesta, compare estos dos números.
// Si los números coinciden, imprime por consola un string
// indicando que el usuario ha acertado,
// si no, imprime por consola que el usuario ha fallado seguido del número correcto.

import promptSync from 'prompt-sync';
const prompt = promptSync();

function randomNumber() {
    return Math.ceil(Math.random() * 10);
}

function isValidInput(n) {
    if (isNaN(n)) {
        console.log('Eso no es un número');
        return false;
    }
    if (Math.trunc(n) !== n) {
        console.log('El número no es entero');
        return false;
    }
    if (n < 1 || n > 10) {
        console.log('El número entero no es válido');
        return false;
    }
    return true;
}

function game() {
    console.log('Escribe Exit para terminar');
    const name = prompt('Dime tu nombre? ');
    console.log(`Hola ${name}`);

    let more = true;
    const randonN = randomNumber();

    while (more) {
        console.log('----------------------------------');
        let n = prompt('Dime un número entero del 1 al 10? ');
        if (n === 'Exit') {
            more = false;
        }
        n = Number(n);
        if (!isValidInput(n)) {
            continue;
        }
        if (n === randonN) {
            console.log(`Muy bien ${name}`);
            more = false;
        } else {
            console.log(`Lo siento ${name}, el número correcto era ${randonN}`);
        }
    }
    console.log(`Gracias por jugar, ${name}`);
}

game();
