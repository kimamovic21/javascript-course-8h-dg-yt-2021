// 14. Scope - var, let, const

// var x = 1;
// var x = 2;
// console.log(x);

// let y = 3;
// y = 4;
// console.log(y);

// const z = 5;
// console.log(z);



// // global scope
// var x = 1;
// let y = 2;
// const z = 3;

// // local scope
// {
//     let y = 4;
//     console.log(y);
// };

// // local scope 
// function myFunc() {
//     const z = 5;
//     console.log(z);

//     {
//         let y = 6;
//         console.log(y);
//     };
// };
// myFunc();

// console.log(x);
// console.log(y);
// console.log(z);


var x = 1;
let y = 2;
const z = 3;
console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
    var x = 11;
    let y = 12;
    const z = 13;
    console.log(`function: ${x}`);    
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);

    {   
        var x = 21;   // function scoped
        let y = 22;   // block scoped
        const z = 23; // block scoped
        console.log(`block: ${x}`);    
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    };

    console.log(`function2: ${x}`);    
    console.log(`function2: ${y}`);
    console.log(`function2: ${z}`);
};
myFunc();
