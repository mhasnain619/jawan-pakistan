//................function Construstor...............//
// function Student(name, age, city) {
//     this.stdName = name;
//     this.stdAge = age;
//     this.stdCity = city;
//     this.getName = function () {
//         return this.stdName;
//     }
// }

// const std1 = new Student('hasnain', 12, 'karachi')
// console.log(std1);
// const std2 = new Student('Anain', 22, 'karachi')
// console.log(std2.getName());


// function Address(city, villageName, villageAge) {
//     this.cityName = city;
//     this.name = villageName;
//     this.age = villageAge;
// }

// const stAdrress = new Address('Khaplu', 'Hundily', 21)
// console.log(stAdrress);

//..............Class Constructor..............//


// class Student {
//     constructor(name, age, city) {
//         this.stdName = name;
//         this.stdAge = age;
//         this.stdCity = city
//     }
// getName = function () {
//     return this.stdName;
// }
// }
// const std1 = new Student('Hasnain', 44, 'karachi')
// console.log(std1.getName());

// class School extends Student {
//     constructor(instituteName, instituteId, name, age, city) {
//         super()
//         this.stdName = name;
//         this.stdAge = age;
//         this.stdCity = city
//         this.schoolName = instituteName;
//         this.schoolId = instituteId;
//     }
// }

// let std2 = new School('JawanPakistan', 12345, 'Hasnain', 44, 'karachi')
// console.log(std2);


// class Work {
//     constructor(name, age, city, salary, designation) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//         this.salary = salary;
//         this.designation = designation;
//     }
// }
// let newWork = new Work('Hasnian', 20, 'Karachi', '70k', 'founer')
// console.log(newWork);

// class workin extends Work {
//     constructor(school, address, name, age, city, salary, designation) {
//         super()
//         this.name = name;
//         this.age = age;
//         this.city = city;
//         this.salary = salary;
//         this.designation = designation;
//         this.school = school;
//         this.address = address;
//     }
// }
// let newWorkin = new workin('JawanPakistan', 'Karachi', 'Hasnian', 20, 'Karachi', '70k', 'Web Developer')
// console.log(newWorkin);



// const greet = () => {
//     return 'Muhammad Hasnain'
// }
// const greet2 = () => {
//     return {
//         nickName: 'anaintay',
//         age: 44

//     }
// }

// export { greet, greet2 }