// Create some arrays
const numbers = [43, 55, 77, 23, 1, 4];
const numbers2 = new Array(22, 45, 100, 78, 96, 12, 1);
const fruit = ["banana", "orange", "apple"];
const mixed = [2, "web", true, undefined, null, { a: 1, b: 2 }, new Date()];

let val;

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(mixed);

// Get single value
val = mixed[5];

// Insert into array
mixed[0] = 100;

// Find index of value
val = mixed.indexOf("web");

// MUTATING ARRAYS
// Add on to end
numbers.push(322);
// Add on to front
numbers.unshift(178);
// Take off from end
numbers.pop();
// Take off from front
numbers.shift();
// Splice values
numbers.splice(1, 3);
// Reverse
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
val = numbers.sort();

// Use the compare function
val = numbers2.sort(function(x, y) {
  return x - y;
});

// Reverse sort
val = numbers2.sort(function(x, y) {
  return y - x;
});

// Find
function under50(num) {
  return num < 50;
}

val = numbers2.find(under50);

console.log(val);
console.log(numbers);
