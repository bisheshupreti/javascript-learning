for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

let j = 10;
do {
  console.log(j);
  j++;
} while (j <= 5);



// for...of: loops through VALUES of an array
let colors = ["red", "blue", "green"];
for (let color of colors) {
  console.log(color);
}

//Also works on String
let word = "Hi";
for (let letter of word) {
  console.log(letter);
}
// Output: H, i


// for...in: loops through KEYS/INDEXES of an object or array
let student = { name: "Special", age: 19 };
for (let key in student) {
  console.log(key, student[key]);
}


for (let index in colors) {
  console.log(index);         // "0", "1", "2"  — these are STRINGS, not numbers!
  console.log(colors[index]); // "red", "blue", "green"
}