// Promise.all(parallel)

// Promise.all is used when you want to run multiple asynchronous operations in parallel and wait for all of them to complete. It returns a single promise that resolves when all the promises in the array passed to it have resolved, or it rejects if any of the promises reject.

function simulateNetworkRequest(url, delay, data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Request to ${url} completed`);
            if (url) {
                resolve(data);
            } else {
                reject('Error: Invalid URL');
            }
        }, delay);
    });
}

const promise1 = simulateNetworkRequest('https://example.com/api/step1', 1000, 'Data from step 1');
const promise2 = simulateNetworkRequest('https://example.com/api/step2', 2000, 'Data from step 2');
const promise3 = simulateNetworkRequest('https://example.com/api/step3', 1500, 'Data from step 3');

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log('All requests completed successfully');
        console.log('Results:', results);
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });
