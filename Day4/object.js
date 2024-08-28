//  Object oriented programming OOPS

//  1) Object: Unique entity that contains properties and methods
let person = {
	first_name: 'Sam',
	last_name: 'Doe',

	getFunction: function () {
		return (`The name of the person is ${person.first_name} ${person.last_name}`)
	},

	phone_number: {
		mobile: '12345',
		landline: '6789'
	}
}
console.log(person.getFunction());
console.log(person.phone_number.landline);

//  2) Class : Blue print of an object
class Vehicle {
	constructor(name, maker, engine) {
		this.name = name;
		this.maker = maker;
		this.engine = engine;
	}
	getDetails() {
		return (`The name of the bike is ${this.name}.`)
	}
}
let bike1 = new Vehicle('MotoCorp', 'Hero', '125cc');
let bike2 = new Vehicle('Honda', 'CBR', '650cc');

console.log(bike1.name);
console.log(bike2.maker);
console.log(bike1.getDetails());

//  3) Inheritance :  A class or Object can access properties and methods from another class/object
class teacher {
	constructor(name) {
		this.name = name;
	}
	toString() {
		return (`Name of teacher: ${this.name}`);
	}
}
class student extends teacher {
	constructor(name, id) {
		super(name);
		this.id = id;
	}
	toString() {
		return (`${super.toString()},
		Student ID: ${this.id}`);
	}
}
let student1 = new student('Rahul', 22);
console.log(student1.toString());

//  4) Polymorphism: Same function with different signatures is called many times
class firstClass {
	add() {
		console.log("First Method")
	}
}
class secondClass extends firstClass {
	add() {
		console.log(30 + 40);
	}
}
class thirdClass extends secondClass {
	add() {
		console.log("Last Method")
	}
}
let ob = new firstClass();
let ob2 = new secondClass();
let ob3 = new thirdClass();
ob.add();
ob2.add();
ob3.add();

//  5) Abstraction: Displaying only essential information and hiding the details
function student2(fname, lname) {
	let firstname = fname;
	let lastname = lname;

	let getDetails_noaccess = function () {
		return (`First name is ${firstname} Last name is ${lastname}`);
	}

	this.getDetails_access = function () {
		return (`First name is ${firstname}, Last name is ${lastname}`);
	}
}
let stud = new student2('Rohit', 'Kumar');
console.log(stud.firstname);
console.log(stud.getDetails_noaccess);
console.log(stud.getDetails_access());

//  6) Encapsulation: Process of wrapping properties and functions within a single unit
class pupil {
	constructor(name, id) {
		this.name = name;
		this.id = id;
	}
	add_Address(add) {
		this.add = add;
	}
	getDetails() {
		console.log(`Name is ${this.name}, Address is: ${this.add}`);
	}
}

let pupil1 = new pupil('Rohan', 21);
pupil1.add_Address('Delhi');
pupil1.getDetails();


