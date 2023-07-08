// 20. Errors

'use strict';

// myName = 'Kerim';
let myName = 'Kerim';
console.log(myName);

const makeError = () => {
    try {
        // const name = 'Kerim';
        let name = 'Kerim';
        name = 'Dave';
    } catch(error) {
        console.error(error);
    };
};
makeError();


const makeError2 = () => {
    let i = 1;
    while( i <= 5); {
        try {
            if ( i % 2 !== 0) {
                throw new Error(`Odd number!`);
            };
            console.log(`Even number`);
        } catch(error) {
            console.error(error.name);
            console.error(error.message);
            console.error(error.stack);
        } finally {
            console.log(`...finally`);
            i++;
        };
    };
};
makeError2();


function customError(message) {
    this.message = message;
    this.name = 'customError';
    this.stack = `${this.name}: ${this.message}`
};
