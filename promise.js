// JavaScript Promises

// A promise in JavaScript is like a container for a future value.
// A promise can be in one of three states:
// Pending: The promise is waiting for something to finishlike waiting for data to load from a website.
// Fulfilled: The promise has been completed successfully. The data waiting is now available.
// Rejected: The promise has failed. Maybe there was a problem, like the server not responding.

let myPromise = new Promise(function (resolve, reject) {
    let success = true;
    if (success) {
        resolve("The data has loaded successfully!");
    } else {
        reject("There was an error loading the data.");
    }
});
myPromise.then(function (message) {
    console.log(message);
}).catch(function (error) {
    console.log(error);
});