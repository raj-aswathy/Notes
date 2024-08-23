// JavaScript Variables
// Variables are containers for storing values

// We can declare variables in three types
// 1) var : we can re-assign the value
//          we can declare the var w/o any value
//          we can re-declare the same var
//          var has global scope
//          var can be hoisted
var a=5;
console.log(a+a);

// 2) let : we can re-assign the value
//          we are not able to redeclare the let name
//          let has block scope
//          let cannot be hoisted
let b=5;
console.log(b+b);

// 3) const : we are not able to re-assign the value
//            Throughout the program, the value of const is same
//            const declaration must be initialized
//            const has block scope
//            const cannot be hoisted
const c=5;
console.log(c+c);