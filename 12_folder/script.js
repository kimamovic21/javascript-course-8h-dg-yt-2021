// 12. Intro to Loops

// while lopp
let myNumber = 0;
while (myNumber < 10) {
    myNumber = myNumber + 2;
    console.log('while:', myNumber);
};

// don't create an endless loop

// do - while loop
let myNumber2 = 10;
do {
    myNumber2 = myNumber2 + 1;
    console.log('do - while', myNumber2);
} 
while (myNumber2 < 15);


// for loop
for (let i = 0; i <= 5; i++) {
    console.log('for:', i);
};

let myName = 'Kerim';
for (let i = 0; i < myName.length; i++) {
    console.log(myName.charAt(i));
};

let myName2 = 'Dave';
let counter = 0;
let myLetter;
while (counter <= 4) { 
    myLetter = myName2[counter];
    console.log(myLetter);
    if (counter === 1) {
        counter = counter + 2;
        continue;
    };
    if (myLetter === 'v') break;
    counter = counter + 1;
};
console.log(counter);
