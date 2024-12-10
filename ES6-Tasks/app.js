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

//..................Simple Expressions:......................//

// let num1 = 200
// let num2 = 100

// let newNum = `${num1 + num2}`
// console.log(newNum);


//................Function Calls:......................//

// function sum(a, b) {
//     return `${a * b}`
// }

// let num1 = 200
// let num2 = 100
// console.log(`the product of ${num1} and ${num2} is ${sum(num1, num2)}`);


//..............Creating a Tagged Template:.....................//

// function tagedFunc(strings, ...values) {

//     console.log(strings);
//     console.log(values);
//     return strings.join("") + values.join("");

// }

// const name = 'hasnain'
// const age = 20
// const result = tagedFunc`my name is ${name} and I am ${age} years old.`
// console.log('result : ', result);


// const currentHour = new Date().getHours();
// console.log(`The current hour is ${currentHour}.`);

// const msg = `Good ${currentHour < 12 ? 'Morning' : 'AfterNoon'}`
// console.log(msg);


//.......................Loops within Template Literals:...............//

// const shoppingList = ["Apples", "Bread", "Milk", "Eggs", "Cheese"];

// let list = `
// <ul>
// ${shoppingList.map(item => `<li>${item}</li>`).join('')}
// </ul>
// `
// document.write(list)

//......................Escaping Backticks:....................//

// let str = `this is a string with backtick: \``
// console.log(str);


//...............Simple Condition:...............//

// let age = 4

// let vote = age > 18 ? 'canVote' : 'No'
// console.log(vote);



//................Even or Odd:..............//

// let number = +prompt('Enter your number')
// let result = number % 2 === 0 ? 'Even' : 'Odd'
// console.log(result)

//...................Grade Evaluation:.........................//

// let yourGrade = +prompt('Enter your scored number')
// let grade = yourGrade >= 90 && yourGrade < 100 ? 'Grade A' :
//     yourGrade >= 80 && yourGrade <= 90 ? 'Grade B' :
//         yourGrade >= 70 && yourGrade <= 80 ? 'Grade c' :
//             yourGrade >= 60 && yourGrade <= 70 ? "Grade D" : 'Fail'
// console.log(grade)


//.............Login Status:.................//

// let isLogedIn = true
// let statusMessage = isLogedIn ? 'Wellcome Back..!' : 'Please log in'
// console.log(statusMessage);


// let isMember = true
// let purchaceAmount = 100
// let discount = isMember && purchaceAmount <= 100 ? 'discount the value 10%' : '0'
// console.log(discount)



//.............Determine Max Value:...............//

// function maxValue(a, b) {
//     return a > b ? a : b
// }
// console.log(maxValue(10, 0))


//..................Greeting Message:..................//

// function greet(name) {
//     return name ? `Hello, ${name}! ` : 'Hello, Guest'
// }
// console.log(greet('Hasnain'))
// console.log(greet(''))


//................Mapping Values:..................//



// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let newNumbers = numbers.map(num => (num % 2 === 0 ? num * 2 : num * 3))
// console.log(newNumbers);



//...................Filtering Values:..................//


// const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];

// let newFruits = fruits.filter(word => (word.length === 3 ? true : false))
// console.log(newFruits);


//...............Copying an Array:................//

//Spread Operator

// let arr1 = ['y', 12]
// let copiedArray = [...arr1]
// console.log('original array', arr1);

// console.log('copied array', copiedArray);


//....................Merging Arrays:....................///


// let arr1 = [1, 2, 3, 4]
// let arr2 = [5, 6, 7, 8, 9]
// let margeArray = [...arr1, ...arr2]
// console.log(margeArray);



//...............Adding Elements to an Array:................//


// let numbers = [5, 6, 7]
// let startNum = [1, 2, 3, 4]
// let endNum = [8, 9, 10]
// let updatedArray = [...startNum, ...numbers, ...endNum]
// console.log(updatedArray);


//.................Copying an Object:....................//

// let originalObject = {
//     name: "John",
//     age: 30,
//     occupation: "Software Engineer",
//     hobbies: ["reading", "coding", "gaming"]
// }
// console.log(originalObject);

// let copiedObject = { ...originalObject }
// console.log(copiedObject);


//..............Merging Objects:.................//

// let obi1 = {
//     name: "John",
//     age: 30,
//     occupation: "Software Engineer",
// }
// let obj2 = {
//     hobbies: ["reading", "coding", "gaming"],
//     country: "USA"
// }

// let mergedObject = { ...obi1, ...obj2 }
// console.log(mergedObject);


//..............Updating Object Properties:.................//

// let user = {
//     name: "John",
//     age: 30,
//     occupation: "Software Engineer",
//     email: 'jhon@gmail.com'
// }
// let updatedUser = {
//     ...user,
//     email: 'new@gmail.com',
// }
// console.log(updatedUser);


//................Passing Array Elements as Arguments:................//



// let num = [1, 2, 3]
// function sum(a, b, c) {
//     return a + b + c
// }
// console.log(sum(...num));


//................Combining Multiple Arrays:.................//

// let num1 = [1, 2, 3]
// let num2 = [4, 5, 6]
// let num3 = [7, 8, 9]
// function combineArrays(num1, num2, num3) {
//     return [...num1, ...num2, ...num3]
// }

// console.log(combineArrays(num1, num2, num3));



// function sum(...theArgs) {
//     let total = 0;
//     for (const arg of theArgs) {
//         total += arg;
//     }
//     return total;
// }

// console.log(sum(1, 2, 3));
// // Expected output: 6

// console.log(sum(1, 2, 3, 4));
// Expected output: 10


// function multilpy(num1, ...num2) {
//     return num2.map(num => num * num1)
// }
// const result = multilpy(2, 3, 4, 5, 6)
// console.log(result);



//............Spread Operator with Nested Structures:...............//

// let array = [[12, 2], [3, 4], [5, 6]]

// let copiedArray = [...array]
// copiedArray[0][0] = 10
// copiedArray[0].push(10)

// console.log("Original Array:", array);
// console.log("Copied Array:", copiedArray);


//............Sum Function:.............//

// function sum(...number) {
//     return number.reduce((total, num) => total + num)
// }
// console.log(sum(1, 2, 3, 4));
// console.log(sum(10, 20));


//..........Average Function:...........//

// function average(...number) {
//     let total = number.reduce((total, num) => total + num)
//     return total / number.length

// }
// console.log(average(1, 2, 3, 4));
// console.log(average(10, 20));


//........First and Rest:..........//


// let numbers = [1, 2, 3, 4, 5]

// let [first, ...rest] = numbers

// console.log(first);
// console.log(rest);


//................Skip and Rest:...........//

// let numbers = ["red", "blue", "green", "yellow",]

// let [, ...rest] = numbers

// // console.log();
// console.log(rest);


//..........Basic Destructuring:...............//

// const { name, email, ...rest } = {
//     name: "John",
//     age: 30,
//     email: 'abc@gmail.com',
//     address: 'khaplu'
// }
// console.log(name);
// console.log(email);
// console.log(rest);


//.............Nested Destructuring:..............//

// const student = {
//     name: "John",
//     id: 12,
//     grades: 30,
//     info: {
//         major: 'Computer Science',
//         address: 'khaplu'
//     }
// }

// const { name, id, info: { major }, ...rest } = {
//     name: "John",
//     id: 12,
//     grades: [30, 40, 45],
//     info: {
//         major: 'Computer Science',
//         address: 'khaplu'
//     }
// }
// console.log(name);
// console.log(id);
// console.log(major);
// console.log(rest);


//..........Filter Even Numbers:.................//

// function filterEven(...nums) {
//     return nums.filter(num => num % 2 === 0);
// }
// console.log(filterEven(1, 2, 3, 4, 5,))




//...............Combine and Sort Arrays:..................//

function sortNumbers(...num) {

    let combined = [].concat(...num)
    return combined.sort((a, b) => a - b);

}
const result1 = sortNumbers([3, 1, 4], [9, 7, 6], [2, 8, 5]);
const result2 = sortNumbers([10, 5, 20], [15, 0, 25]);
const result3 = sortNumbers([30, 20], [10], [50, 40, 60]);

// Log the results
console.log("Result 1:", result1); // Logs: [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("Result 2:", result2); // Logs: [0, 5, 10, 15, 20, 25]
console.log("Result 3:", result3); // Logs: [10, 20, 30, 40, 50, 60]