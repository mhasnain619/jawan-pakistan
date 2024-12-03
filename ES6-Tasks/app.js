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


// Try to declare the same variable name twice using var.

// var myName = 'hasnain'
// console.log(myName);
// var myName = 'Anainty'
// console.log(myName);

// var allow me to redeclare the same variable


// Try to declare the same variable name twice using let.


// let myName = 'hasnain'
// console.log(myName);
// let myName = 'Anainty'
// console.log(myName);

// const myName = 'hasnain'
// console.log(myName);
// const myName = 'anaintay'
// console.log(myName);

// let and const give us a error that myName is already been declared


// .............Re - assignment:..............

// Declare a variable using var and assign it a value.Then reassign it a
// new value.

// var myName = 'hasnain'
// myName = 'anaintay'
// console.log(myName);

// Declare a variable using let and assign it a value.Then reassign it a
// new value.

// let myName = 'hasnain'
// myName = 'anaintay'
// console.log(myName);


// Declare a variable using const and assign it a value.Then reassign it
// a new value.

// const myName = 'hasnain'
// myName = 'anaintay'
// console.log(myName);

// in var and let we can easily reassign a value but in const we cannot reassign because its value is fixed



// .....................Temporal Dead Zone(TDZ):................

// Declare a let variable inside a block but try to log it before the
// declaration.
// {
//     console.log(myName);
//     var myName = 'hasnain';
//     console.log(myName);
// }

// {
//     console.log(myName);
//     let myName = 'hasnain';
//     console.log(myName);
// }

// {
//     console.log(myName);
//     const myName = 'hasnain';
//     console.log(myName);
// }

//.................When to use var, let, and const:.................//
// let cities = ['karachi', 'lahore', 'islamabad']
// function foo() {
//     for (var i = 0; i <= cities.length; i++) {
//         console.log(i);
//     }
// }
// foo();


// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000)
// }


// const users = ['hasnain', 'ali', 'abbas']
// for (let i = 0; i < users.length; i++) {
//     setTimeout(() => {
//         console.log(users[i]);
//     }, 2000)
// }

//.....................String Interpolation:...................//


// let firstName = 'Muhammad'
// let lastName = 'Hasnain'

// console.log(`${firstName} ${lastName}`);

//............Multi-line Strings:...............//

// let address = `
// M hasnain
// 123, main road
// karachi
// `
// console.log(address);

