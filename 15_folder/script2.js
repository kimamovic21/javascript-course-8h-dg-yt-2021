// 15 - Arrays - data sctructure

//                0    1    2    3    4    5
const myArray = ['A', 'B', 'C', 'D', 'E', 'F'];

// const newArray = myArray.slice(2, 5);
// console.log(newArray);

// myArray.reverse();
// console.log(myArray);

const newString = myArray.join();
console.log(newString);

const newArray = newString.split(',');
console.log(newArray);

const myArrayA = [1, 2, 3];
console.log(myArrayA);
const myArrayB = [4, 5, 6];
console.log(myArrayB);

const myArrayAB = myArrayA.concat(myArrayB);
console.log(myArrayAB);

const myArrayABJoined = [myArrayA, myArrayB];
console.log(myArrayABJoined);

const myArrayABSpreadOperator = [...myArrayA, ...myArrayB];
console.log(myArrayABSpreadOperator);



const equipShelfA = ['baseball', 'football', 'volleyball'];
const equipShelfB = ['basketball', 'golf balls', 'tennis balls'];

const clothesShelfA = ['tank tops', 't-shirts', 'jerseys'];
const clothesShelfB = ['sweat tops', 'sweat pants', 'hoodies'];

console.log(equipShelfA[1]);
console.log(clothesShelfB[0]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];
console.log(equipDept);
console.log(clothesDept);

console.log(equipDept[0]);
console.log(equipDept[0][1]);

console.log(clothesDept[1]);
console.log(clothesDept[1][0]);

const sportsStore = [equipDept, clothesDept];
console.log(sportsStore);
console.log(sportsStore[0]);
console.log(sportsStore[0][0]);
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1]);
console.log(sportsStore[1][1]);
console.log(sportsStore[1][1][0]);

