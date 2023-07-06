// 8. Switch Statements

// syntax
/* switch (expression OR value) {
    case choice1:
        // run this code
        break;
    case choice1:
        // run this different code
        break;

    // add as many cases as needed

    // default:
        // run this code if no case matches
        // no need for a break here;
 };  */


switch (Math.floor(Math.random() * 3 + 1)) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log(`No match!`);
};


let playerOne = 'rock';
// let playerOne = 'paper';
// let playerOne = 'scissors';

let computer = 'rock';
// let computer = 'paper';
// let computer = 'scissors';


switch (playerOne) {
    case computer:
        console.log(`Tie game!`);
        break;
    case 'rock':
        if(computer === 'paper') {
            console.log(`Computer wins`);
        } else {
            console.log(`playerOne wins!`);
        };
        break;
    case 'paper':
        if (computer === 'scissors') {
            console.log(`Computer wins!`);
        } else {
            console.log(`playerOne wins!`);
        };
        break;
    case 'scissors':
        if (computer === 'rock') {
            console.log(`Computer wins!`);
        } else {
            console.log(`playerOne wins!`);
        };
        break;
};


