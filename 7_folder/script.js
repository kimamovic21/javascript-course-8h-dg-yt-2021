// 7. If Statement

// if (condition) {
//     run some code
// }
// else {
//     run some different code
// } 

// let customerIsBanned = true;
let customerIsBanned = false;
let soup = 'chicken noodle soup';
// let soup;
let crackers = true;
// let crackers = false;
let reply;

if (customerIsBanned) {
    reply = `No soup for you ! ⛔`;
} else if (soup && crackers) {
    reply = `Here's your order of ${soup} 🥣 and crackers.`;
} else if (soup) {
    reply = `Here's your order of ${soup} 🥣.`;
} else {
    reply = `Sorry, we're out of soup.`;
};
console.log(reply);


let testScore = 89;
let collegeStudent = true;
let grade;

if (testScore >= 90) {
    grade = 'A';
} else if (testScore >= 80) {
    grade = 'B';
} else if (testScore >= 70) {
    grade = 'C';
} else if (testScore >= 60) {
    grade = 'D';
} else {
    // Neste if statement
    if (collegeStudent) {
        grade = 'Unsatisfied';
    } else {
        grade = 'Failed';
    };
};
console.log(grade);


// Rock, paper, scissors game - decision tree
let playerOne;
let computer;

if (playerOne === computer) {
    // tie game
} else if (playerOne === 'rock') {
    if (computer === 'paper') {
        // computer wins
    } else {
        // playerOne wins
    };
}  else if (playerOne === 'paper') {
    if (computer === 'scisssors') {
        // computer wins
    } else {
        // playerOne wins
    };
} else {
    if (computer === 'rock') {
        // computer wins
    } else {
        // playerOne wins
    };
};
