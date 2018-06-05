const person = {
  firstName: "Artur",
  lastName: "Fs",
  age: 30,
  hobbies: ["football", "fishing"],
  address: {
    city: "vinnitsa",
    country: "Ukraine"
  },
  getBirthYear: function() {
    return 2018 - this.age;
  }
};

let val;

val = person;

// Get specific value
val = person.firstName;
val = person["lastName"];
val = person.age;
val = person.hobbies[0];
val = person.address.city;
val = person.address["country"];
val = person.getBirthYear();

console.log(val);

const people = [
  { name: "artur", age: 30 },
  { name: "mike", age: 25 },
  { name: "azaza", age: 25 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
