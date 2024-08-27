// JavaScript Variables
// Variables are containers for storing values

// We can declare variables in three types
// 1) var : we can re-assign the value
//          we can declare the var w/o any value
//          we can re-declare the same var
//          var has global scope
//          var can be hoisted
var a = 5;
a = 15; // valid, reassigning the value
var a = 25; // valid, re-declaring is allowed
if (true) {
    var a = 35; // affects the outer scope
}
console.log(a); // Output: 35 (changed by the if block)

// 2) let : we can re-assign the value
//          we are not able to redeclare the let name
//          let has block scope
//          let cannot be hoisted
let b = 10;
b = 20; // valid, reassigning the value
// let b = 30; // error, cannot be re-declared in the same block
if (true) {
    let b = 30; // valid, this b is only within the if block
    console.log(b); // Output: 30 (inside the block)
}
console.log(b); // Output: 20 (outside the block, original b)

// 3) const : we are not able to re-assign the value
//            Throughout the program, the value of const is same
//            const declaration must be initialized
//            const has block scope
//            const cannot be hoisted
const c = 50;
// c = 60; // error, cannot be updated
// const c = 70; // error, cannot be re-declared
if (true) {
    const c = 80; // valid, this c is only within the if block
    console.log(c); // Output: 80 (inside the block)
}
console.log(c); // Output: 50 (outside the block, original c)
