
//1. var
function testVar() {
  if (true) {
    var message = "Hello from var";
  }
  console.log(message); // "Hello from var" — accessible even outside the if-block
}

testVar();

var city = "Kathmandu";
var city = "Pokhara"; // allowed — var CAN be redeclared
console.log(city); // "Pokhara"

city = "Biratnagar"; // allowed — var CAN be reassigned
console.log(city); // "Biratnagar"








//2. let 
function testLet() {
  if (true) {
    let message = "Hello from let";
    console.log(message); 
  }
  // console.log(message); // ERROR! message is not defined outside the if-block
}
testLet();

let age = 20;
age = 21; // allowed — let CAN be reassigned
console.log(age); // 21

// let age = 25; // ERROR! Cannot redeclare 'age' in the same scope


// 3. const
const pi = 3.14;
console.log(pi); // 3.14

// pi = 3.14159;   // ERROR! Assignment to constant variable
// const pi = 3;   // ERROR! Cannot redeclare 'pi'
