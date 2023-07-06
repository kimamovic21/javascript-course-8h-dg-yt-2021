// 10. User Input

let myBoolean = confirm(`Ok === True \n Cancel === false`);
console.log(myBoolean);

let myName = prompt(`Please enter you name!`);
console.log(typeof myName);
if (myName) {
    console.log(myName);
    console.log(myName.length);
    console.log(myName.trim().length);
    console.log(myName.trim());
} else {
    console.log(`You didn't enter your name!`);
};
