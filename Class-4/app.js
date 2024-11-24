// Pass by Value
// Pass by Reference


// let obj = {
//     name: 'John',
//     age: 30,
//     address: {
//         street: '123 Main St',
//         city: 'Anytown',
//         state: 'CA',
//         zip: '12345'
//     }
// }
// let obj2 = { ...obj }

// obj2.status = true

// console.log(obj);
// console.log(obj2);



let obj1 = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
    }
}
let obj2 = { ...obj1, address: { ...obj1.address } };

obj1.city = 'lahore'
obj1.address.zip = '1'
console.log(obj1);
console.log(obj2);
