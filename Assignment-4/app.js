// const array = [
//     42,
//     true,
//     'hello world',
//     {
//         name: "jhon",
//         age: 25,
//         isStudent: false,
//     },
//     false,
//     3.14,
//     'Javascript is fun!'
// ]

//Q-1

// let newArr = array.map((e, i) => {
//     return String(e)
// })
// console.log(newArr);


// Q-2

//..................filter Numbers..........//

// let newArr = array.filter((e, i) => {
//     return typeof e == 'number'
// })
// console.log(newArr);



// Q-3

// let newArray = array.forEach((ele, inde) => {
//     let newEle = typeof (ele)
//     console.log(newEle)
// })



// Q-4

const array = [
    42,
    true,
    'hello world',
    {
        name: "jhon",
        age: 25,
        isStudent: false,
    },
    false,
    3.14,
    'Javascript is fun!'
]


// let newArray = array.reduce((ele1, ele2) => {
//     return typeof ele2 === 'number' ? ele1 + ele2 : ele1
// }, 0)
// console.log(newArray);


//Q-5

// let newArray = array.find((e, i) => {
//     let bol = typeof e === 'boolean'
//     console.log(bol);
// })


// Q-6

// let newObj = array.findIndex((e, i) => {
//     return typeof e === 'object'
// })
// console.log(newObj);


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

// Q-7

// let newArr = array.some((e, i) => {
//     return typeof e === 'number'
// })
// console.log(newArr);

// Q-8

// let newArr = array.every((e, i) => {
//     return typeof e === 'string'
// })
// console.log(newArr);
