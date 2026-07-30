let mobile = {
  company: "Samsung",

    details(model) {
        this.model = model;
        console.log(this.company);
        console.log(this.model);
        //console.log(company); // Reference Error
  },
};

mobile.details("A55");
console.log(mobile.model); // A55


// this to refer calling object
let person1 = {
  name: "Bishesh",

  show() {
    console.log(this.name);
  },
};

let person2 = {
  name: "Special",

  show: person1.show,
};

person1.show(); // Bishesh 
person2.show(); // Special


