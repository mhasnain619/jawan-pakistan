// let yourName = prompt('Enter Your Name')
// let yourCity = prompt('Enter Your Name')


// let userInfo = (`My name is ${yourName}. I lived in ${yourCity}`);

// document.write(userInfo)


// multiplication table


// let userInput = +prompt('Enter your Number to generate a table')

// let userRange = +prompt('Enter Your Range')
// for (let i = 1; i <= 10; i++) {
//     document.write(userInput + 'X ' + i + "= " + userInput * i + '</br>')
// }


// for (let i = 1; i <= userRange; i++) {
//     document.write(`${userInput} x ${i} = ${userInput * i}</br>`)
// }




// let YourNum = +prompt('Enter Your Number To Create a Table')

// let YourRange = +prompt('Enter Your Range For Table')

// for (let i = 1; i <= YourRange; i++) {
//     document.write(`${YourNum} x ${i} = ${YourNum * i}</br>`)
// }


let yourNum = +prompt('Enter Your Number To Create a Table')

let YourRange = +prompt('Enter Your Range For Table')
for (let i = 1; i <= YourRange; i++) {
    document.write(yourNum + " x " + i + " = " + yourNum * i + '</br>')
}