// my biodata 

const name = "Muhammad Hasnain";
const email = "hasn@example.com";
const city = "Karachi";
const education = "Master's in Computer Science";
const occupation = "Web Developer";
const instituteName = "Jawan Pakistan";
let phoneNumber = '+92-362633523'

const bioData = `
<h1>Biodata</h1>
<p>Name: ${name}</p>
<p>Email: ${email}</p>
<p>City: ${city}</p>
<p>Education: ${education}</p>
<p>Occupation: ${occupation}</p>
<p>Institute Name: ${instituteName}</p>
<p>Phone Number: ${phoneNumber}</p>
`
document.write(bioData)


// create variables

//var is a globel scope
//var and let canbe reassigned
var myName = 'Muhammad Hasnain'

var myName = 'Hassan'

console.log(myName);

// let var and const all are function scope

function func() {
    let myAge = 25
    console.log(myAge)
}

// block scope

// Var is not a block scope

var campus = 'Sir Adamje'
{
    console.log(campus);

}

// let amd const are block scope 
// let and const cannot bo redeclared

{
    let newName = 'Anaintay'
    console.log(newName);
}