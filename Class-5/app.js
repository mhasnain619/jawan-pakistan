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

let outer = (num1) => {
    return function (num2) {
        console.log('inner func call');
        return function (num3) {
            console.log(num1 + num2 + num3);
            console.log('inner inner func');
        }
    }
}
outer(10)(20)(30)