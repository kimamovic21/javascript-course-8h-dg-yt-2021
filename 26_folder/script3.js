// 26 Fetch, async, await

// Promises

// 3 states: Pending, Fulfilled, Rejected

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if(!error) {
        resolve(`Yes, resolved the promise!`);
    } 
    else {
        reject(`No! Rejected the promise!`);
    };
});

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(`My Promise 2 resolved after 3 seconds!`);
    }, 3000);
});
myPromise2.then(value => {
    console.log(value);
});

myPromise.then(value => {
    console.log(value);
});
