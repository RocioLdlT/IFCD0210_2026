// Crea una función que calcule y retorne
// la tabla de multiplicar de un número introducido como parámetro.

function calculateMultiplicationTable(n) {
    let result = [];
    for (let i = 0; i <= 10; i++) {
        const m = n * i;
        result[result.length] = `${n} x ${i} = ${m}`;
    }
    return result;
}

const table = calculateMultiplicationTable(8);
console.table(table)
