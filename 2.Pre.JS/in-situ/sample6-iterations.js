function randomNumber() {
    return Math.floor(Math.random() * 11);
}

// Bucle While

// Condicion es externa

const LIMIT = 5;

let i = 0;
while (i < LIMIT) {
    // hago algo
    console.log('While', i, randomNumber());
    i++;
}

// Condicion es interna

for (let i = 0; i < LIMIT; i++) {
    console.log('For', i, randomNumber());
}

// No dependiendo del contador

const FINAL = 5;
let v = 0;

while (v !== FINAL) {
    v = randomNumber();
    console.log('While', v);
}

let v1 = 0;
for (let index = 0; index < 1; ) {
    v1 = randomNumber();
    console.log('For', v1);
    if (v1 === FINAL){
        break;
    }
}
