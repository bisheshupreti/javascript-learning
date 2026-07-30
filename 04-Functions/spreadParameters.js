//Basic Example
function add(a, b, c) {
  return a + b + c;
}

let numbers = [5, 10, 15];

console.log(add(...numbers));

//copying an Array using spread operator
let arr1 = [1, 2, 3];

let arr2 = [...arr1];
arr2.push(4);

console.log(arr1);
console.log(arr2);


//Spread operator in Math Function
let integers = [5, 10, 15, 9, 69, 0];
console.log(Math.max(integers)); // This will print NaN

console.log(Math.max(...integers)); // This Will give correct answer


//Merging Array
let finalArray = [...numbers, ...integers];
console.log(finalArray);


//In String: Converting String to Array
let name = "Bishesh";

let nameArray = [...name];
console.log(nameArray);

