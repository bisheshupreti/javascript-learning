let student = {
  name: "Bishesh Upreti",
  age: 19,
  faculty: "BCA",
};

console.log(student);

// Objects with Different datatypes
let person = {
  name: "Special",
  age: 19,
  isStudent: true,
  marks: [80, 75, 90],
  city: null,
};
console.log(person);

let std = {
  name: "Special",

  study: function () {
    console.log("Studying...");
  },
};

console.log(std);
std.study();

//Using new Object() Constructor
let per = new Object();

per.name = "Bishesh";
per.age = 20;
per.faculty = "BCA";

console.log(per);