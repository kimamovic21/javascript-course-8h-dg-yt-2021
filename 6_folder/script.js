// 6. Code Challenge
// Your First Code Challenge

// Write a code that will return a random letter from your name

//            01234
let myName = 'Kerim';
console.log(myName.charAt(Math.random() * 5));
console.log(myName.charAt(Math.floor(Math.random() * 5)));


// Let's make this work for all names
const anyName = 'Dave';
console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));

const anyName2 = 'Jonathan';
console.log(anyName2.charAt(Math.floor(Math.random() * anyName.length)));


// Generate random word in sentence
let mySentence = 'I come from Sarajevo';
var mySentenceArray = mySentence.split(' ');
let myWord = mySentenceArray[Math.floor(Math.random() * mySentenceArray.length)];
console.log(myWord);
