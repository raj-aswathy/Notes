function simulateNetworkRequest(url, delay, data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(data);
            } else {
                reject('Error: Invalid URL');
            }
        }, delay);
    });
}

// Converting .then() to async/await 
// involves replacing the .then() chains with await inside an async function and using try/catch for error handling.

simulateNetworkRequest('https://example.com/api/data', 1000, 'Response Data')
    .then(data => {
        console.log('Received data:', data);
        return simulateNetworkRequest('https://example.com/api/other', 500, 'Other Response Data');
    })
    .then(otherData => {
        console.log('Received other data:', otherData);
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });

    async function fetchData() {
        try {
            const data = await simulateNetworkRequest('https://example.com/api/data', 1000, 'Response Data');
            console.log('Received data:', data);
            
            const otherData = await simulateNetworkRequest('https://example.com/api/other', 500, 'Other Response Data');
            console.log('Received other data:', otherData);
        } catch (error) {
            console.error('Error occurred:', error);
        }
    }
    
    fetchData();
    
// Converting async/await to .then() 
// involves breaking down the operations into a chain of .then() calls and using .catch() for errors.

async function fetchData() {
    try {
        const data = await simulateNetworkRequest('https://example.com/api/data', 1000, 'Response Data');
        console.log('Received data:', data);
        
        const otherData = await simulateNetworkRequest('https://example.com/api/other', 500, 'Other Response Data');
        console.log('Received other data:', otherData);
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

fetchData();

simulateNetworkRequest('https://example.com/api/data', 1000, 'Response Data')
    .then(data => {
        console.log('Received data:', data);
        return simulateNetworkRequest('https://example.com/api/other', 500, 'Other Response Data');
    })
    .then(otherData => {
        console.log('Received other data:', otherData);
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });

