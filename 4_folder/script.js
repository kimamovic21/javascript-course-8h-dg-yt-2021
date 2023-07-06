// 4. Numbers

const myNumber = 42;
console.log(myNumber);

const myFloat = 42.0;
console.log(myFloat);

const myString = "42.123";
console.log(myString);

console.log(myNumber === myFloat);
console.log(myNumber === myString);

console.log(Number(myString) + 2);
console.log(Number(myString) === myNumber);
console.log(Number('Kerim'));
console.log(Number(true));
console.log(Number(false));


// Number Methods

// The isInteger() method determines whether the passed value is an integer.
console.log(Number.isInteger(myString));

/* The parseFloat() method parses an argument and returns a floating point number. 
   If a number can't be parse from the argument, it returns NaN. */
let myParseString = '42abc';
console.log(Number.parseFloat(myNumber));
console.log(Number.parseFloat(myFloat));
console.log(Number.parseFloat(myParseString));

// The toFixed() method formats a number according to how many decimal points you provide as the parameter.
console.log(myFloat.toFixed(2));

// The parseInt() method parses a string argument and returns an integer
console.log(Number.parseInt(myString));

// The toString() method returns a string representing the number
console.log(myFloat.toString());

// Chaining = Useing several method chaind together
console.log(Number.parseFloat("4.123abc").toFixed(2).toString());

// NaN is an acronym for Not a Number
// The .isNaN() method determines whether the passed value is NaN and its type is Number
console.log(Number.isNaN('Kerim'));
