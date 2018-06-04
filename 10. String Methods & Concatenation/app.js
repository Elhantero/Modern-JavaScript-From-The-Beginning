const firstName = "artur";
const lastName = "fs";

let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "Brad ";
val += "Traversy";

val = "Hello my name is " + firstName + " and my surname is " + lastName;

// Escaping
val = "That's awesome i can't wait";

// Length
val = firstName.length;

// concat
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

// indexOf()
val = firstName.indexOf("r");
val = firstName.lastIndexOf("r");

// charAt();
val = firstName.charAt("2");

// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 3);

// slice()
val = firstName.slice(-2);

// split()
val = firstName.split("r");

// replace()
val = firstName.replace("a", "A");

// includes()
val = firstName.includes("t");

console.log(val);
