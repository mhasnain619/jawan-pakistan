
// Declaing subjects
let subject1 = 'Math'
let subject2 = 'Science'
let subject3 = 'English'
let subject4 = 'History'
let subject5 = 'Geography'



//Declaring Your Number
let MathNumber = +prompt('Enter Your Math Obtained Mark')
let ScienceNumber = +prompt('Enter Your Science Obtained Mark')
let EnglishNumber = +prompt('Enter Your English Obtained Mark')
let HistoryNumber = +prompt('Enter Your History Obtained Mark')
let GeographyNumber = +prompt('Enter Your Geography Obtained Mark')


// Total marks and percentage
const totalMarks = 500; // Assuming each subject is out of 100
let obtainedMarks = MathNumber + ScienceNumber + EnglishNumber + HistoryNumber + GeographyNumber;
let percentage = (obtainedMarks / totalMarks) * 100;


//Calculate Grades
let check = percentage >= 0 && percentage <= 30 ? "Sorry you fail" :
    percentage >= 31 && percentage <= 50 ? "you are in grade D" :
        percentage >= 51 && percentage <= 60 ? "you grade is C" :
            percentage >= 61 && percentage <= 70 ? "you grade is B" :
                percentage >= 71 && percentage <= 80 ? "you grade is A" :
                    percentage >= 81 && percentage <= 100 ? "you grade is a++" : "invalid percantage"

document.write(`
            <h1>Mark Sheet</h1>
            <p>${subject1}: ${MathNumber}</p>
            <p>${subject2}: ${ScienceNumber}</p>
            <p>${subject3}: ${EnglishNumber}</p>
            <p>${subject4}: ${HistoryNumber}</p>
            <p>${subject5}: ${GeographyNumber}</p>
            <p>Total Marks: ${totalMarks}</p>
            <p>Obtained Marks: ${obtainedMarks}</p>
            <p>Percentage: ${percentage.toFixed(2)}%</p>
            <p>Grade: ${check}</p>
        `);