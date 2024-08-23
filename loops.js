// Javascript Loops

// 1) for loop
// loops through a block of code a number of times
for(var i = 0; i<=10; i++){
    console.log(i);
}

// 2) while loop
// loops through a block of code while a specified condition is true
var num = 5;
var fact = 1;
var j = 1;
while(j <= num) {
	fact = fact * j;
	j++;
}
console.log(`Factorial of ${num} is ${fact}`);

// 3) do -while loop
// loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
var i = 1;
do {
    console.log(i)
    i++;
  }
while (i < 10);