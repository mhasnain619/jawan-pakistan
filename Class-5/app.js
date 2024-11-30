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
//.....................................Map........................//

// Map method return new array krta ha agr map method k ander return keyword use hva h to

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let namee1 = arr1.map((element, index) => {
//     return 'Anaintay'
// })
// console.log(namee1);

//.....................................forEach........................//


//agr forEach k ander return keyWork likho gy to new array return ni krta

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let namee = arr.forEach((element, index) => {
//     return 10
// })
// console.log(namee);


//.....................................filter........................//

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



// let num = [1, 2, 3, 4, 5, 6, 7, 3, 23]
// let num2 = num.forEach((element, index) => {
//     return 10;
// })
// console.log(num2);



// let num = [1, 2, 3, 4, 4, 56, 67, 788, 342, 212, 343, 67, 88, 45, 21]


// let newNum = num.map((e, i) => {
//     return e + 10
// })
// console.log(newNum);

//.....................some.............//

// let num = [1, 2, 3, 4,]
// let Arr = num.some((e, i) => {
//     return e == 5
// })
// console.log(Arr);

//..........every...............//

// let num = [5, 5, 5, 5]
// let Arr = num.every((e, i) => {
//     return e == 5
// })
// console.log(Arr);

//........................Reduce.................//

let num = [{ num: 1 }, { num: 2 }, { num: 3 }]


let newNum = num.reduce((ele1, ele2) => {
    return ele1 + ele2.num
    // return { num: ele1.num + ele2.num }

}, 10)
console.log(newNum);
