// JavaScript Conditional Statements

// 1) if - to specify a block of code to be executed, if a specified condition is true
x = 5
y = 5
if(x==y){
    console.log("Values are equal");
}

// 2) else - to specify a block of code to be executed, if the same condition is false
var a = 1;

if(a>5) {
    console.log("a is greater than 5");
}
else{
    console.log("a is less than 5");
}

// 3) else if - to specify a new condition to test, if the first condition is false
var num1 = 40;
var num2 = 10;

if(num1 > num2){
    console.log(`${num1} is greater`);
}
else if(num1 < num2){
    console.log(`${num2} is greater`);
}
else{
    console.log("Both are equal");
}

// 4) switch - to specify many alternative blocks of code to be executed
var currentDay = new Date();
var today = currentDay.getDay();
console.log(today);

switch (today) {
    case 0:
        console.log("Today is Sunday");
        break;

    case 1:
        console.log("Today is Monday");
        break;

    case 2:
        console.log("Today is Tuesday");
        break;

    case 3:
        console.log("Today is Wednesday");
        break;

    case 4:
        console.log("Today is Thursday");
        break;

    case 5:
        console.log("Today is Friday");
        break;

    default:
        console.log("Today is Saturday");
}


// 4) Ternary operator - shorthand way to write an if-else statement on a single line 

var age = 18;
var canVote = age >= 18 ? "Yes, you can vote!" : "No, you cannot vote yet.";
console.log(canVote);

// result: Yes, you can vote!