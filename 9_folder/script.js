// 9. Conditionals: Ternary Operator

// Syntax
// condition ? ifTrue : ifFalse;


let soup = `Chicken Noodle Soup`;
// let soup;
// let soup = false;

let response = soup ? `Yes, we have soup.` : `Sorry, no soup today`;
console.log(response);


// let isCustomerBanned = true;
let isCustomerBanned = false;

let soupAccess = isCustomerBanned ? `Sorry, no soup for you today!` : `Yes, we have ${soup} today;` 
console.log(soupAccess);


// let soup2;
let soup2 = `Chicken Noodle Soup`;
// let isCustomerBanned2 = true;
let isCustomerBanned2 = false;

let soupAccess2 = isCustomerBanned2 ? `Sorry, no soup for you!` : soup2
    ? `Yes, we have ${soup2} today.`
    : `Sorry, no soup today.`;
console.log(soupAccess2);


let testScore = 89;
let myGrade = 
    testScore > 89 
        ? 'A' 
        : testScore > 79 
        ? 'B'
        : testScore > 69 
        ? 'C'
        : testScore > 59 
        ? 'D'
        : 'F';
console.log(`My test grade is ${myGrade}.`);


let playerOne = 'rock';
// let playerOne = 'paper';
// let playerOne = 'scissors';
let computer = 'rock';
// let computer = 'paper';
// let computer = 'scissors';

let result = 
    playerOne === computer 
        ? 'Tie game!'
        : playerOne === 'rock' && computer === 'paper' 
        ? 'Computer wins!'
        : playerOne === 'paper' && computer === 'scissors' 
        ? 'Computer wins!'
        : playerOne === 'scissors' && computer === 'rock' 
        ? 'Computer wins!'
        : 'playerOne wins!';
console.log(result);



