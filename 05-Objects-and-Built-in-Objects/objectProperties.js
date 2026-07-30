let Person = {
    name: "Bishesh Upreti",
    age : 19
};

let key = "age";

// Accessing of Properties
console.log(Person.name); // Bishesh Upreti
console.log(Person[name]);//Undefined

console.log(Person["name"]); // Bishesh Upreti 
console.log(Person[key]); // 19


Person.faculty = "BCA"; //Adding Property
Person.age = 20; // Updating Value

console.log(Person); // {name: 'Bishesh Upreti', age: 20, faculty: 'BCA'}

delete Person.faculty; // Deleteing Property
console.log(Person); // {name: 'Bishesh Upreti', age: 20}


//Checking Whether a Property Exists
console.log("faculty" in Person); // false
console.log("age" in Person); // true


//Listing all Properties, Use of for in loop
for (let key in Person) {
  console.log(key, Person[key]); // key gives keys and Person[key] gives value
}

//Listing All Keys and Values 
console.log(Object.keys(Person)); //  ['name', 'age']
console.log(Object.values(Person)); // ['Bishesh Upreti', 20]
console.log(Object.entries(Person)); // ['name', 'Bishesh Upreti'], ['age', 20]

//Accessing Nested properties
let student = {
    name: "Bishesh",

    address: {
        country: "Nepal",
        city: "KTM"
    }
};
console.log(student.address.city); //KTM