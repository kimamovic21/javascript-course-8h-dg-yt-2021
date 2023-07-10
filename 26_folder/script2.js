// 26 Fetch, async, await

// Promises

// 3 states: Pending, Fulfilled, Rejected

const myPromise = new Promise((resolve, reject) => {
    // const error = true;
    const error = false;
    
    if(!error) {
        resolve(`Yes, resolved the promise!`);
    } 
    else {
        reject(`No! Rejected the promise!`);
    };
});
console.log(myPromise);

myPromise
    .then(value => {
        console.log(value);
        return value + 1;
    })
    .then(newValue => {
        console.log(newValue);
    })
    .catch(error => {
        console.error(error);
    });
