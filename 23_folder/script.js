// 23. Web Storage API

// Nor part of the DOM - refers to the window API
// Available to JS via the global variable: window

// We do not have to type window. It is implied.

const myArray = ['eat', 'sleep', 'code'];

const myObject = {
    name: 'Kerim',
    hobbies: ['eat', 'sleep', 'code'],
    logName: function() {
        console.log(this.name);
    },
};
myObject.logName();

sessionStorage.setItem('mySessionStore', JSON.stringify(myObject));
const mySessionData = JSON.parse(
    sessionStorage.getItem('mySessionStore')
);
console.log(mySessionData);
console.log(typeof mySessionData);

localStorage.setItem('myLocalStore', JSON.stringify(myObject));
const myKey = localStorage.key(0);
const storeLength = localStorage.length;
// localStorage.removeItem('myLocalStore')
const myLocalData = JSON.parse(
    sessionStorage.getItem('mySessionStore')
);
console.log(myLocalData);
console.log(typeof myLocalData);
console.log(myKey);
console.log(storeLength);
