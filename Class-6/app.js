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


// let yourName = new Promise((req, res) => {
//     let name = prompt("guess your Name")
//     if (name == 'anaintay') {
//         res(`Hurray you won..! your name is ${name}`)
//     } else {
//         req('inncorrect')
//     }
// })
// yourName.then((data) => {
//     console.log(data);

// }).catch((err) => {
//     console.log(err);
// })

// async function guessYourName() {
//     while (true) {
//         let name = prompt("Guess your Name:");
//         if (name === 'anaintay') {
//             console.log(`Hurray you won..! Your name is ${name}`);
//             break; // loop se bahar niklne ke liye
//         } else {
//             console.log("Incorrect! Try again.");
//         }
//     }
// }

// guessYourName();


// let yourName = new Promise((resolve, reject) => {
//     function askName() {
//         let name = prompt("Guess your Name:");
//         if (name === 'anaintay') {
//             resolve(`Hurray you won..! Your name is ${name}`);
//         } else {
//             reject("Incorrect! Try again.");
//             askName(); // Dobara prompt dikhane ke liye function ko call karein
//         }
//     }
//     askName(); // Function ko start karne ke liye call karein
// });

// yourName
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// let yourName = new Promise((req, res) => {
//     function askName() {
//         let name = prompt("Guess your Name:");
//         if (name === 'anaintay') {
//             res(`Hurray you won..! Your name is ${name}`)
//         } else {
//             req("Incorrect! Try again.");
//             askName();
//         }
//     }
//     askName()
// })
// yourName.then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

// let userInput = +prompt('Enter your Number to generate a table')

// let userRange = +prompt('Enter Your Range')
// for (let i = 1; i <= userRange; i++) {
//     document.write(userInput + 'X ' + i + "= " + userInput * i + '</br>')
// }

// let userInput = +prompt('Enter Your Number')
// if (userInput == '') {
//     for (let i = 1; i <= 10; i++) {
//         document.write(i + 'X' + i + '=' + i * i + '</br>');
//     }
// }


// let userInput = prompt('Enter Your Number');
// if (userInput === '') {
//     userInput = 5;
// } else {
//     userInput = +userInput;
// }

// for (let i = 1; i <= 10; i++) {
//     document.write(userInput + ' X ' + i + ' = ' + userInput * i + '</br>');
// }


// let calculate = new Promise((req, res) => {
//     let userInput = prompt('Enter Your Number to generate a table');
//     let dfaultNum = 5
//     if (userInput === '') {
//         req(userInput = 5);
//     } else {
//         res(userInput = +userInput);
//     }
//     for (let i = 1; i <= 10; i++) {
//         document.write(userInput + ' X ' + i + ' = ' + userInput * i + '</br>');
//     }
// })
// calculate.then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);

// })


// let userInput = +prompt('Enter your number to generate a table')
// let range = +prompt('Enter your Range')
// let defaultNum = 5

// let calculate = new Promise((res, rej) => {
//     if (userInput) {
//         res(userInput)
//     }
//     else {
//         rej(defaultNum)
//     }
// })
// calculate.then((data) => {
//     for (let i = 1; i <= range; i++) {
//         document.write(`${data} x ${i} = ${data * i} </br>`)
//     }
// }).catch((err) => {
//     for (let j = 1; j <= range; j++) {
//         document.write(`${err} x ${j} = ${err * j} </br>`)
//     }
// })


// let num = +prompt('Enter your number to generate table')
// let range = +prompt('Enter your range')
// let defaultNum = 2
// let newTable = new Promise((req, res) => {
//     if (num) {
//         res(num)
//     } else {
//         req(defaultNum)
//     }
// })
// newTable.then((data) => {
//     for (let i = 1; i <= range; i++) {
//         document.write(`${data} X ${i} = ${data * i} </br>`)
//     }
// }).catch((err) => {
//     for (let i = 1; i <= range; i++) {
//         document.write(`${err} X ${i} = ${err * i} </br>`)
//     }
// })




//.........................API........................//
// let getData = fetch('https://jsonplaceholder.typicode.com/posts').then((reponse) => {
//     return reponse.json()
// })
//     .then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.log(err)
//     })


// let newData = new Promise((res, req) => {
//     fetch('https://jsonplaceholder.typicode.com/posts').then((reponse) => {
//         return reponse.json()
//     }).then((data) => {
//         res(data)
//     }).then((err) => {
//         req(err)
//     })
// }).then((response) => {
//     console.log(response);
// })


// let getData = async () => {
//     try {
//         let data = await fetch('https://jsonplaceholder.typicode.com/photos')
//         let response = await data.json()
//         let container = document.createElement('div')
//         document.body.appendChild(container)
//         response.slice(0, 10).forEach(photo => {
//             let img = document.createElement('img')
//             img.src = photo.thumbnailUrl
//             img.alt = photo.title;
//             img.style.margin = '10px';
//             img.style.width = '150px'; // Set image width
//             img.style.height = '150px'
//             container.appendChild(img)
//         });
//         console.log(response);
//     } catch (error) {
//         console.log('failed to get data', error.message);
//     }
// }
// getData()


// let getData = fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err)
// })


//.........................API........................//
// let getData = fetch('https://jsonplaceholder.typicode.com/posts').then((reponse) => {
//     return reponse.json()
// })
//     .then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.log(err)
//     })


let newData = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
        return response.json()
    }).then((data) => {
        resolve(data)
    }).catch((err) => {
        reject(err)
    })
})
newData.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('faile to get data ', err.message)
})

