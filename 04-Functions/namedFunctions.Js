function greet(name) {
  console.log("Hello " + name);
}

greet("Bishesh");
greet("Special");

// Function Hoisting Concept
sayHello();

function sayHello() {
  console.log("Hello");
}

//Even though the function is called before it appears in the code, it works.
//Conceptually, JavaScript treats it like:

// function sayHello() {
//   console.log("Hello");
// }


// sayHello();