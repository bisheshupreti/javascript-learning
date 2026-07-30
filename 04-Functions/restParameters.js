function show(...numbers) {
  console.log(numbers);
}

show(1, 2, 4, 7);
show();
show(1, 2, 8);
show(4);
show(1, 0);

// Mixing Normal and Rest Parameters
function student(name, age, ...subjects) {
  console.log(name);

  console.log(age);

  console.log(subjects);
}

student("Bishesh Upreti", 19, "DBMS", "JavaScript", "Operating System");
student(
  "Biraj Regmi",
  18,
  "Numerical Methods",
  "Advance Programming With JAVA",
);

//Rest Parameters Vs Arguments Object
function test() {
    console.log(arguments);

    let toatl = 0;
    for (number of arguments){
        toatl += number;
    }
    return toatl;
}

console.log(test(1, 2, 3, 4, 8));


// Finding Sum using rest parameters when we don't know number of parameters
function sum(...numbers) {
    let total = numbers.reduce((total, num) => total + num);

    return total;
}
console.log(sum(1, 2, 3, 4, 8));
console.log(sum(3, 2, 5));
console.log(sum(1, 2));
console.log(sum(5));
