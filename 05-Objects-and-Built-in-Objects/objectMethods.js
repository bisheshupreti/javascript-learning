let car = {
  brand: "BMW",

  start: function () {
    console.log("Car Started");
  },

  stop: function () {
    console.log("Car Stopped");
  },
};

car.start();
car.stop();

// Also can accept Parameters and return value
let calculator = {
  add: function (a, b) {
        console.log(a + b);
        return a + b;
  }
};

let sum = calculator.add(5, 3);
console.log(sum);


//Shorter way to write method after ES6
let student = {
  study() {
    console.log("Studying");
  }
};

student.study();
