//String Creation
let name = "Bishesh";
console.log(name + ", " + typeof name); // Bishesh, string

let Name = new String("Bishesh");
console.log(Name + ", " + typeof Name); // Bishesh, object

//JS Property
let text1 = "JavaScript";
console.log(text1.length); //10

let text2 = "    Hello World    ";
console.log(text2.length);// 19 length also include spaces


// Common JS method
let str = "JavaScript";
console.log(str.toUpperCase());   // JAVASCRIPT; 
console.log(str.toLowerCase());   // javascript;
console.log(str.startsWith("Java")); // true;
console.log(str.endsWith("Python")); // false; 
console.log(str.includes("Script")); // true;

console.log(text2.trim()); // "Hello World" not "    Hello World    "

console.log(str.slice(0, 4)); // Java
console.log(str.slice(4)); // 4 is starting index //Script

console.log(str.slice(-10)); // JavaScript -10 is equal to 0 index in str string
console.log(str.slice(-10, -7)) // Jav

console.log(str.substring(0, 4)) //Java

let statement = "I like Java";
console.log(statement.replace("Java", "JavaScript")); //I like JavaScript

let longText = "Apple,Banana,Mango";
console.log(longText.split(",")); // (3) ['Apple', 'Banana', 'Mango']

let language = "JavaScript";
console.log(language.indexOf("S")); //4

console.log(language.charAt(2)); // v
console.log(language[0]); // J


