let name = "Bishesh Upreti";
function printName() {
  console.log(name);
}
console.log(name);
printName(); // name is Global Scope Variables



// Scope is age is only inside age function
function age() {
  let age = 19;
  console.log(age);
}
age();
console.log(age);




//Block  Scope Example
function testBlockScope() {
  if (true) {
    let a = 10;
    var b = 20;
    const pi = 3.14;
  }

  //console.log(a); // Reference Error
  console.log(b);
  //console.log(pi); // Reference Error
}
testBlockScope();



//Lexical Scope
let language = "JavaScript";
function printLanguage() {
  console.log(language);
}

printLanguage();

function outer() {
  let a = 10;
  function inner() {
    console.log(a); // 10
  }

  inner();
}

outer();




// Scope Chain
let country = "Nepal";

function out() {
  let city = "Kathmandu";

  function inn() {
    let area = "Baneshwor";

    console.log(country);

    console.log(city);

    console.log(area);
  }

  inn();
}

out();






//Shodowing
let degree = "BCA";

function showDegree() {
  let degree = "MCA";

  console.log(degree);
}
showDegree();