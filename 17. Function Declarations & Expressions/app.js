// FUNCTION DECLARATION

function greet(firstName = "ART", lastName = "PRO") {
  //console.log("hello");
  /*
  if (typeof firstName === "undefined") {
    firstName = "ART";
  }
  if (typeof lastName === "undefined") {
    lastName = "PRO";
  }
  */

  return "hello " + firstName + " " + lastName;
}

//console.log(greet("artur"));

// FUNCTION EXPRESSIONS
const square = function(x = 3) {
  return x * x;
};

//console.log(square(5));

// IMMIDIATELY INVOKABLE FUNCTION EXPRESSIONS -IIFEs

(function(x = 3) {
  console.log(x + x);
  return x + x;
})(5);

// PROPERTY METHODS
const todo = {
  name: "Artur",
  add: function() {
    console.log("azaza");
  },
  edit: function(id = 0) {
    console.log(`Edit todo ${id}`);
  }
};

todo.delete = function() {
  console.log("delete aaaaaaaaa");
};

todo.add();
todo.edit(7);
todo.delete();
