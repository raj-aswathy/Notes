// Callback functions

// A Callback function is a function that is passed as an argument to another function and is executed after a certain task finished.
// Simply, a function is called inside another function

function firstFunction(callback){
    setTimeout(function(){
        console.log("Task 1 done");
        callback();
    },3000);
}

function secondFunction(){
    console.log("Task 2 done");
}

firstFunction(secondFunction)