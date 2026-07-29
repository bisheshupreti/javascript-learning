let squares = [1, 4, 9, 16, 25];
console.log(squares[0]);
console.log(squares[1]);

console.log(squares);
console.log(squares.length);


// Array Method
let fruits = ["Apple"];

//1. PUSH()
fruits.push("Banana");
console.log(fruits);

//2. POP()
fruits.pop();
console.log(fruits);

//3. unshift()
fruits.unshift("Blueberry");
console.log(fruits);

//4. shift()
fruits.shift();
console.log(fruits);

//unshift multiple
fruits.unshift("Banana", "Mango", "Orange");
console.log(fruits);


//5. indexOf(), 
console.log(fruits.indexOf("Orange"));
console.log(fruits.indexOf("Grapes"));

//6. includes() 
console.log(fruits.includes("Apple"));
console.log(fruits.includes("Watermelon"));

//7. slice()
let arr = [10, 20, 30, 40, 50];
let result = arr.slice(1, 4);

console.log(result);
console.log(arr);

result = arr.slice(3);
console.log(result);

result = arr.slice();
console.log(result);


console.log("Special")
// 8. splice()
let removed = arr.splice(1, 2);

console.log(removed);
console.log(arr);

arr.splice(0, 0, 0, 5);
console.log(arr);

arr.splice(2);
console.log(arr);

console.log("Special");
//9. concat()
let arr1 = [10, 20, 30];
let arr2 = [40, 50, 60];

let combined = arr1.concat(arr2);

console.log(combined);

console.log("Special");

let numbers = [1, 2, 3, 4, 5];

let double = numbers.map(function (num) {
  return num * 2;
});

console.log(double);


console.log("Special");
let marks = [45, 60, 38, 80, 55];

let pass = marks.filter(function (mark) {
  return mark >= 40;
});

console.log(pass);



console.log("Special");
let integers = [10, 20, 30, 40, 50];

let FirstBigInt = integers.find(function (num) {
  return num > 25;
});

console.log(FirstBigInt);

console.log("Special");
numbers = [10, 20, 30, 40];

let sum = numbers.reduce(function (total, num) {
  return total + num;
}, 0);

console.log(sum);
