//................function Construstor...............//
// function Student(name, age, city) {
//     this.stdName = name;
//     this.stdAge = age;
//     this.stdCity = city;
// }

// const std1 = new Student('hasnain', 12, 'karachi')
// console.log(std1);
// const std2 = new Student('Anain', 22, 'karachi')
// console.log(std2);



//..............Class Constructor..............//


class Student {
    constructor(name, age, city) {
        this.stdName = name;
        this.stdAge = age;
        this.stdCity = city
    }
}
const std1 = new Student('Hasnain', 44, 'karachi')
console.log(std1);
