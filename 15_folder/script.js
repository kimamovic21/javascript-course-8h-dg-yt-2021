// 15. Arrays - data structure

const myArray = [];

// add elements to an array
myArray[0] = 'Kerim';
myArray[1] = 10;
myArray[2] = false;

// refer to an array
console.log(myArray);

// length property
console.log(myArray.length);

// last element in an array
console.log(myArray[myArray.length - 1]);

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

myArray.push('school');
console.log(myArray);

const lastItemInMyArray = myArray.pop();
console.log(lastItemInMyArray);

myArray.unshift(42);
console.log(myArray);

const newLength = myArray.unshift('Hi');
console.log(newLength);

const firstItem = myArray.shift();
console.log(firstItem);

console.log(myArray[1]);
console.log(myArray[4]);

// delete myArray[1];
// console.log(myArray);
// console.log(myArray[1]);

myArray.splice(1, 1);
console.log(myArray);
console.log(myArray[1]);

myArray.splice(0, 1, 'Dave');
console.log(myArray);
console.log(myArray[1]);



