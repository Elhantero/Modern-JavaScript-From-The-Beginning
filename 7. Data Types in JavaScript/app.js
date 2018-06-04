// Primitive types

// String
const name = "Artur";
// Number
const age = 30;
// Boolean
const hasKids = false;
// Null
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();

console.log(typeof name);
console.log(typeof age);
console.log(typeof hasKids);
console.log(typeof car);
console.log(typeof test);
console.log(typeof sym);

// REFERENCE TYPES - OBJECTS

// Array
const hobbies = ["footbal", "fishing"];
console.log(typeof hobbies);
// Object literal
const address = {
  city: "Vinnitsya"
};
console.log(typeof address);

const today = new Date();
console.log(today);
console.log(typeof today);
