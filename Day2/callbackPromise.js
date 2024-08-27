// Promisifying a callback function

// Promisification is the process of transforming a callback-based function into a function that returns a Promise

function simulateNetworkRequest(url, callback) {
    setTimeout(() => {
        if (url === 'https://example.com') {
            callback(null, 'Data from example.com');
        } else {
            callback('Error: Invalid URL');
        }
    }, 1000);
}

function simulateNetworkRequestPromise(url) {
    return new Promise((resolve, reject) => {
        simulateNetworkRequest(url, (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

console.log("Starting network request...");

const promise = simulateNetworkRequestPromise('https://example.com');

promise.then(
    function(data) {
        console.log('Received data:', data);
    },
    function(error) {
        console.error('Error:', error);
    }
);
