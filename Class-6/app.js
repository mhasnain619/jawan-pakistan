// console.log('start 1');

// setTimeout(() => {
//     console.log('start 2');
// }, 2000)


// console.log('statr 3');


// Sync or Async

// promise

// async await


// promise


// Three stages of promise

// 1)  pending
// 2)  fulfile / resolve
// 3)  reject


// var pro = new Promise((resolve, reject) => {
//     let myName = 'Hasnain'
//     if (myName == 'Hanain') {
//         resolve('promise resolve', resolve);
//     } else {
//         reject('promise reject', reject);
//     }
// })
// pro.then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })

// let yourName = new Promise((req, res) => {
//     let name = prompt("enter your Name")
//     if (name == '') {
//         res('Name is empty')
//     } else {
//         req(`your name is ${name}`)
//     }
// })

// yourName.then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })


let yourName = new Promise((req, res) => {
    let name = prompt("enter your Name")
    if (name == '') {
        res('Name is empty')
    } else {
        req(`your name is ${name}`)
    }
})
yourName.then((data) => {
    console.log(data);

}).catch((err) => {
    console.log(err);
})