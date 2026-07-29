//Function Expression
let greet = function () {
  console.log("Hello");
};

//Function Call
greet();


//Anonymous Function with Parameters Storing different variables
let add = function (a, b) {
    return a + b;
}
let sum = add;

console.log(sum(5 + 8));

//Anonymous Function as call back
setTimeout(function () {
  console.log("Hello");
}, 2000);


//Anonymous Function in array Method
let numbers = [1, 2, 3];

numbers.forEach(function (number) {
  console.log(number);
});
