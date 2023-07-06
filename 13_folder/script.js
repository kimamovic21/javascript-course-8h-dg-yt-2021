// 13. Functions

// Methods = Built-in functions!

// Function Declarations Syntax:

function sum() {
    return 2 + 2;
};
console.log(sum());  


function sum2(num1, num2) {
    console.log(num1);
    console.log(num2);
    if (num2 === undefined) {
        return num1 + num1;
    }
    return num1 + num2;
};
console.log(sum2(5, 6));
console.log(sum2(5));


function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
};
console.log(getUserNameFromEmail('name.surname@email.com'));


const getUserNameFromEmail2 = function (email) {
    return email.slice(0, email.indexOf("@"));
};
console.log(getUserNameFromEmail2('name2.surname2@email2.com'));


const getUserNameFromEmailArrowFunction = (email) => {
    return email.slice(0, email.indexOf("@"));
};
console.log(getUserNameFromEmailArrowFunction('name3.surname3@email3.com'));


const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(toProperCase('kErIm'));
console.log(toProperCase('dave'));

// Function - Reusable Code!

