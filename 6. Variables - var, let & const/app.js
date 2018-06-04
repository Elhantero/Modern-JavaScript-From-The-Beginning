// var, let, const

var name = "Artur F.";
console.log(name);
name = "Master";
console.log(name);

// Init var
var greeting;
console.log(greeting);
greeting = "Hello";
console.log(greeting);

// letters, numbers, _, $
// Can not start with number
var _name = "a";
var $name = "b";
console.log(_name, $name);

// Multi word vars
var firstName = "artur"; // Camel case
var first_name = "art"; // Underscore
var FirstName = "art"; // Pascal case

// LET
let name2 = "artur";
console.log(name2);
name2 = "art f";
console.log(name2);

// Const
const name3 = "const";
console.log(name3);
// Can not reassign
//name3 = "aaa";
//console.log(name3);
//const name4;
const person = {
  name: "artur"
};

person.name = "master";
console.log(person);

const arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);
