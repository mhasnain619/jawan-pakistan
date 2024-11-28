// .......................Global Scope.......................


// Declare a variable using var outside of any function or block.
// var myName = 'Hasnain'
// console.log(myName);


// Declare a variable using let outside of any function or block.
// let myName = 'Hasnain'
// console.log(myName);


// Declare a variable using const outside of any function or block.
// const myName = 'Hasnain'
// console.log(myName);



// .....................Function Scope..................


// Create a function and declare a variable using var inside the
// function.

// function foo() {
//     var myName = 'Hasnain'
//     console.log(myName);
// }
// foo()

// Declare a variable using let inside the function.
// function foo() {
//     let myName = 'Hasnain'
//     console.log(myName);
// }
// foo()

// Declare a variable using const inside the function.

// function foo() {
//     const myName = 'Hasnain'
//     console.log(myName);
// }
// foo()

// Try to log all three variables to the console outside the function.

// What do you observe ?

// i am getting nyName is not defined when i log the variables outside the function



// .................Block Scope:..............


// Use an if statement and declare a variable using var inside the
// block.


// let name1 = 'Hasnain'
// if (name1 == 'Hasnain') {
//     var myName = 'Hasnain'
// }
// console.log(myName);


// Declare a variable using let inside the block.

// let name1 = 'hasnain'
// if (name1 == 'hasnain') {
//     let myName = 'Hasnain'
//     console.log(myName);
// }

// Declare a variable using const inside the block.

// let num = 20
// if (num == 20) {
//     const myNum = 20
// }
// console.log(myNum);

// Try to log all three variables to the console outside the block.
// ● What do you observe ?

// in let and const variables is getting not defined  but in var i am successfully console the value of variable


// ...............Hoisting with var:.............



// Write code where you log a var variable before it is declared.

// console.log(myName);
// var myName = 'Hasnain'

// What value do you get ?
//in this i am getting undefined because it is huested



// ........................Hoisting with let and const:................


// console.log(myName);
// let myName = 'Hasnain'

// console.log(myName);
// const myName = 'hasnain'

// What kind of error do you get ?

// i am getting cannot access before initialization



// .................Re - declaration:.................
