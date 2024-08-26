// Promise chaining (sequential)

// Promise chaining is used to chain multiple asynchronous task that has to be performed sequentially. 

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

simulateNetworkRequest('https://example.com/api/step1', 1000, 'Data from step 1')
    .then(step1Data => {
        console.log('Received:', step1Data);
        return simulateNetworkRequest('https://example.com/api/step2', 2000, 'Data from step 2');
    })
    .then(step2Data => {
        console.log('Received:', step2Data);
        return simulateNetworkRequest('https://example.com/api/step3', 1500, 'Data from step 3');
    })
    .then(step3Data => {
        console.log('Received:', step3Data);
        console.log('All steps completed');
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });
