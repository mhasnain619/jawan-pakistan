// Object Methods

// let obj = {
//     name: "Hasnain",
//     class: "Web And App",
//     age: "22",
//     city: "Karachi"

// }
// console.log(Object.keys(obj));


// for (let keys in obj) {
//     console.log(keys, obj[keys]);

// }
// console.log(Object.values(obj));

// console.log(Object.entries(obj));
//

// Short Circuits
// let name = "false"

// let check = name || 'Allow'
// console.log(check);

// let a =

// let num = 2 + 2 * (10 + 1) || 'some thing'
// console.log(num);




// let num = a + b - (--a - false) + 5 || undefined

// let num = 40 - 'hello' + 2 * 5 || null || "Faraz" + 10 * 2;
// console.log(num);


// let num = false || (true && a + b)
// console.log(num);

// let exp2 = (10 - true + "hello" + (5 - 0) && false) || "values"
// console.log(exp2);

// let exp3 = 40 - "hello" + 2 * 5 || null || "faraz" + 10 * 2
// console.log(exp3);


// let exp4 = 40 - "hello" + 2 * 5 && null && "faraz" + 10 * 2

// console.log(exp4)


// let exp5 = ('hello' + 20 - 3 || false || 'hasnain' + 10 * 2)
// console.log(exp5);

// let exp6 = ('hello' + 20 + 3 && null && 'hasnain' + 10 * 2)
// console.log(exp6);

// let a = 2
// let b = 3
// let exp7 = ++a - 'hello' + 4 || undefined || --b + 10 * 3
// console.log(exp7);


// let c = 2
// let d = 3
// let exp8 = ++c - 'hello' + 4 || undefined && --d + 10 * 3
// console.log(exp8);

// let a = 20
// let b = 10

// let exp8 = 'hello' + --a && null || --b + 10 * 3
// console.log(exp8);


// let a = 20
// let b = 10

// let exp8 = 'hello' + --a || null && --b + 10 * 3
// console.log(exp8);

// default perameters

// function sum(a = 2, b = 2) {
//     console.log(a + b);

// }
// sum()
// function myName(a, b, c = 90) {
//     console.log(a, b, c);
//     console.log(a + b + c);

// }
// myName(78, 87)


// Rest Operators
// let store = 0
// function sum(a, b, ...rest) {
//     for (let i = 0; i < rest.length; i++) {
//         store += rest[i]
//     }
//     console.log(a + b + store);

// }
// sum(20, 34, 45, 56, 67, 34, 45, 65)

// let newStore;
// function sumNum(a, b, ...rest) {
//     for (let i = 0; i < rest.length; i++) {
//         newStore += rest[i]
//     }
//     console.log(newStore);

// }


// sumNum(23, 34, 454, 565, 232, 23)


//Spread Operator

// let arr1 = ['y', 12]
// let arr2 = ['23', 2122]

// let arr3 = [...arr1, ...arr2]
// console.log(arr3);


// Destructing of Array


let [name, num, status, obj] = ['abc', 50, true, { id: 1, status: false }]
console.log(obj);






