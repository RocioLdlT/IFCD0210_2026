// Condiciones

function randomNumber() {
    return Math.floor(Math.random() * 11);
}

let c = randomNumber();

if (c < 4) {
    // Solo si se cumple
    console.log('Numero pequeño');
} else if (c < 6) {
     // Solo si se cumple
     console.log('Numero mediano');
} else {
    // Sólo si NO se cumple ninguna
    console.log('Numero grande');
}

// Siempre
console.log('El número es', c);
