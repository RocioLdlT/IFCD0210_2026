// Crea una función que reciba un parámetro de tipo string
// y retorna el string revertido. (ejemplo: 'casa' => 'asac).

function iterate(text) {
    console.log(text.length);
    for (let i = 0; i < text.length; i++) {
        const element = text[i];
        console.log(i, element);
    }
}

function reverse(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result = text[i] + result;
    }
    return result;
}

// function reverse2(text) {
//     let result = '';
//     for (let i = text.length -1 ; i >= 0; i--) {
//         result = result + text[i]
//     }
//     return result
// }

iterate('Ernestina');
console.log(reverse('Pepe Pérez'));
