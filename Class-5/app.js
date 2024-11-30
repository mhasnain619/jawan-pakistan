// .............Arrow Function...

// let sum = () => {
//     let a = 10;
//     let b = 20;
//     return a + b;
// }

// let greet = (a, b) => a + b;

// console.log(greet(12, 34));


// ...............Higher Order Function

// ek func k ander dusra function return ho raha ho

// let outer = (num1, num11) => {
//     return function (num2) {
//         console.log('inner func call');
//         return function (num3) {
//             console.log(num1 + num11 + num2 + num3);
//             console.log('inner inner func');
//         }
//     }
// }
// outer(10, 4)(20, 5)(30)


// let muFunc = (a, b) => {
//     return function (a, b) {
//         console.log(a + b);
//     }
// }
// muFunc(5, 5)(10, 10);


// let sum = () => {
//     console.log('first function call');
//     return function () {
//         console.log('inner func call');
//         return function () {
//             console.log('2nd inner func call');
//         }
//     }
// }

// sum()()()

// let clickMe = document.getElementById('btn')
// let myName = () => {
//     clickMe.addEventListener('click', () => {
//         return function () {
//             console.log('button clicked');
//             return function () {
//                 return function () {

//                 }
//             }
//         }
//     })
//     console.log('Muhammd Hasnain');
// }
// myName()()


// ...,,,,,,,,,,, CallBack Function ,,,,,,,,,,,,


// let abc = (callback) => {
//     callback()

// }
// let xyz = () => {
//     console.log('xyz call');
// }
// abc(xyz)


// Array Methods
// Map method return new array krta ha agr map method k ander return keyword use hva h to
//agr forEach k ander return keyWork likho gy to new array return ni krta

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let namee = arr.map((element, index) => {
//     return 'Anaintay'
// })
// console.log(namee);


// let arr = [23, 1, 2, 3, 4, 5, 6, 7, 8, 9, 3432, 2342, 345, 32312, 122, 345]
// let namee = arr.filter((element, index) => {
//     return element < 50
// })
// console.log(namee);


// let cities = ['Karachi', 'Khaplu', 'Lahore', 'Islamabad']
// let cityName = cities.filter((e, i) => {
//     return e == 'Khaplu'
// })
// console.log(cityName);


// ...................Array.Find...............//


// let cities = ['Karachi', 'Khaplu', 'Lahore', 'Islamabad']
// let cityName = cities.find((e, i) => {
//     return e == 'Khaplu'
// })
// console.log(cityName);

// ...................Array.FindIndex...............//

// let cities = ['Karachi', 'Khaplu', 'Lahore', 'Islamabad']
// let cityName = cities.findIndex((e, i) => {
//     return e == 'Islamabad'
// })
// console.log(cityName);