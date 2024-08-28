// Javascript class 

// keyword - class to create a class
// Add a method named constructor():

// Syntax
// class ClassName {
//   constructor() { ... }
// }

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
// The constructor method is called automatically when a new object is created.

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

console.log(myCar1);
console.log(myCar2);
