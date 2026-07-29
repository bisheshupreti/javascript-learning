//Basic arrow function without Parameters
const sayHi = () => {
  console.log("Hi");
};

sayHi();

//Function with one parameter
const square = (num) => {
  return num * num;
};

console.log(square(5));

//Or
// const square = (num) => {
//   return num * num;
// };

// Function with  Multiple parameters
const add = (a, b) => {
  return a + b;
};

console.log(add(69, 88));

//implicit return
const sq = (num) => num * num;
console.log(sq(6));

// When, There is only one statement, Curly braces {} are omitted
// JavaScript automatically returns the result.
// This is called an Implicit Return.

//Returning Object
const person = () => ({
  name: "Bishesh",
});

console.log(person());

//This is Wrong we must write inside small braces ()
// const person = () => {
//   name: "Special";
// };

//arrow function as callback in map method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const doubled = numbers.map((num) => num * 2);
console.log(doubled);

const even = numbers.filter((num) => num % 2 === 0);
console.log(even);

const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);