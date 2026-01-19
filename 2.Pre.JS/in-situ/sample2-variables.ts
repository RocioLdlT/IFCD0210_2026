
// Declaración + inicialización
const PI = 3.14;
// NO EXISTE modificación
// PI = 234 // Error de TS 

// Declaración
let userAge;
console.log(typeof userAge); // undefined
// Asignación de valor
userAge = 22;
console.log(typeof userAge);
// Modificación
userAge = 23;

// Declaración + asignación [= inicialización]
let userName = "Pepe";
// Modificación
userName = "Jose";

// OBJETOS

// Declaración + asignación
const user = {
    name: "Luis",
    age: 24,
};

console.log(user.age);
// Mutar el objeto
user.age = 25;
console.log(user.age);
// user = {}
// No se puede REASIGNAR
//user.job = "Developer";
//delete user.name
console.log(user)
