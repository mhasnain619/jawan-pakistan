//......Q1..........
// let abc = ''
// let test = 20

// let exp1 = ((4 + 5) && abc || false + test) * (1-- || 1--) || (false && (++1 + 1)) * end;

// //let exp1 = ((9abc) || test) * (1) || (0)
// //let exp1 =9abctest

// // console.log(exp1);

// let exp2 = 10 * ('foo' && 5 + (++6) || 'bar') //&& (false + --'test') || 0 && true

// // let exp2 = 10(foo12)
// console.log(exp2);

// let obj = {
// }

// let check1 = obj.check ? obj.check : 10

// console.log(check1);

// let check2 = obj.check || 10

// let check2 = false && 10
// console.log(check2);
// //

// let num = 10 * 'er'
// console.log(num);


///Q.2

// let exp2 = 10 * ('foo' && 5 + (++6) || 'bar') //&& (false + --'test') || 0 && true

// let exp2 = 10*('foo)&& (0)
//             nan && 0
//             nan


//Q-3

// let exp3 = 3 + (1-- || 'start') * 4 && (--0 + 'value') * (1 + 2) + "result"
// console.log(exp3);


//Q-4
// let a = 5
// let exp4 = 'hello' * (++a + true) || (2 + 3 * 'abc') * (0 + 1) + 'xyz' && 0;

//let exp4 = hello*(6) || (5* 'abc') *(1xyz) && 0
//let exp4 = nan || nan && 0
//let exp4 = 0

// console.log(exp4);

//Q-5
// let a = 2
// let value = 2
// let exp5 = (true || (0 + 1) * "test" && 4) || (false && 3 + value) * a-- + 2;
// let exp5 = (true ) || ()
// it returns true bcz in or operator first value is true it returns
// console.log(exp5);

//Q-6

// let a = 2
// let abc = 2

// let exp6 = ++a + abc && (4 * 2) + 3 || (0 + 1) && (3 * hello) || a--;
// let exp6 = 5 && 11 || 1 && nan
// let exp6 = 11 || 1 && 0
// let exp6 = 11
// console.log(exp6);

//Q-7

// let a = 2
// let foo = 2

// let exp7 = (foo + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
//let exp7 = (7) * (4) || 6+ 3 || "result"
// let exp7 = 28 || 9 || "result"
// let exp7 = 28
// console.log(exp7);

// Q-8

// let test = 2
// let value = 2
// let exp8 = (0 + 1) && (true + 0) || (false + test) * 4 && 3 + 2 || value;
// let exp8 = (1) || (2) * 4
// let exp8 = 1
// console.log(exp8);


// Q-9
// let abc = 2
// let result = 2
// let exp9 = 3 * abc + (true + 1) || (++a + test) && (3 + result) || null;
// let exp9 = 6 + (2) || (5) && (null)
//let exp9 = 8
// console.log(exp9);

// Q-10
// let a = 2
// let exp10 = (++a + false) && 'start' || 0 + 1 && ' value' || 5 * 'end' && a++;
//let exp10 = (3) && 'start' || 1 && 'value'
// let exp10 = start
// console.log(exp10);



// q-11


// let a = 2
// let exp11 = (false && 'hello') + (a++ || 3 + 'test') * 4 || 5 * 'abc' && 0;
//let exp11 = (0) + (2)*4
// let exp11 = 8
// console.log(exp11);



//Q-12
// let exp12 = 'hello' * (true + 0) + 2 || (false + 1) * 3 && 'result' || 4 + 'test';
//let exp12 = nan || 'result'
// let exp12 = 'result'
// console.log(exp12);


// Q-13
// let a = 2
// let exp13 = 5 * (a++ || false) + 2 && (false + 'test') || 3 * 'end' && 4;
//let exp13 = 5 * (4) && (test)
// let exp13 = 20
// console.log(exp13);


// Q-14
// let a = 3
// let exp14 = (false + 'abc') * 2 || (--a + 1) * 'start' + 3 && 4 || 'end';
// //let exp14 = nan
// // let exp14 = end
// console.log(exp14);

// Q-15
// let a = 3
// let exp15 = (0 + 'foo') * 3 + (true && 'result') || 'start' + (++a + 1) * 4;
// let exp15 = (nan ) + result || start + 16
// let exp15 = nanresult
// console.log(exp15);


// Q-16
// let a = 2
// let exp16 = 2 * 'end' || (false && true) || 'start' + (--a + 2) * 5 && null;
// let exp16 = nan || start + 10
// let exp16 = nanstart + 10
// console.log(exp16);

// Q-17
// let a = 2
// let exp17 = 3 + 2 * ('test' + a--) && (false + 3) * 5 || 0 + 'value' && 4;
// let exp17 = 5 * (2test) && (15) || 0value && 4
// let exp17 = 4
// console.log(exp17);

// Q-19
// let a = 10
// let exp18 = 'start' && (false || 2 * 'end') || (++a + 1) * 3 + 'result' && 0;
// let exp18 = start || (nan) || 12result && 0
// let exp18 = 0
// console.log(exp18);

// Q-20
// let a = 10
// let exp20 = 2 * 3 + 'hello' && (false + ++a) * 'result' || 'end' + 5 || 0;
// let exp20 = 6hello && (nan) || end5
// let exp20 = end5
// console.log(exp20);

// Q-21
// let a = 10
// let exp21 = 5 * (true + ++a) && ('test' + false) || 7 * (true + 2) + 'value';
// let exp21 = nan && test
// let exp21 = test
// console.log(exp21);

// Q-22
// let a = 2
// let exp22 = 'foo' + 4 && (++a + 1) * 'start' || 5 + 6 * (false + true) && 'test';
//let exp22 = foo4 || 11 && 'tesst'
// let exp2 = test
// console.log(exp22);

// Q-23
// let a = 2
// let exp23 = (false && 2) || (a++ + 1) * 'end' && 'start' || 4 * 5 && 'result';
//let exp23 = 0 || nan && 'start || 20 && 'result
// let exp23 = 'result'
// console.log(exp23);

// Q-24
// let a = 2
// let exp24 = 3 + 2 * 'test' || (false + a--) * 'hello' && 'world' + 1 || 2;
// let exp24 = nan || nan && 'world1 || 2
// let exp24 = 2
// console.log(exp24);

// Q-25

// let a = 2;
// let exp25 = (3 + 4) * (false || a--) && 5 || 'start' + 1 + 'test' && 0;
// let exp25 = 7 * 2 && 5 || 'start1test' && 0;
// let exp25 = 14 && 5 || 0;
// let exp25 = 5 || 0;
// let exp25 = 5;
// console.log(exp25);

// Q-26
// let a = 3
// let exp26 = 'hello' && 3 * 2 + (a++ + 1) || (false + true) * 'result' + 'end';
//let exp26 = hello && 6 + (4) || nanend
// let exp26 = 10
// console.log(exp26);

// Q-27
// let a = 3
// let exp27 = 3 * 'test' + (true + 2) && (false || 'value') || 'start' + a++;
//let exp27 = nan + (3) && ('value') || start3
// let exp27 = nan3 && 'value' || 'start3'
// let exp27 = 'start3'
// console.log(exp27);


// Q-28
// let a = 3
// let exp28 = (false + 1) * 'hello' || 3 + (a-- && 5) * 'result' || 'world';
//let exp28 = nan || 3 + (nan) || 'world'
// let exp28 = nan || 3nan || 'world'
// let exp28 = 'world'
// console.log(exp28);


// Q-29
// let exp29 = 'start' + 2 * (true || 1) && (false || 'value') * 5 + 'result';
// let exp29 = 'start' + 2 (1) && (0)* 5result
// let exp29 = 'start' + 2 * 1 && 0result
// let exp29 = nan
// console.log(exp29);

// Q-30
// let a = 3
// let exp30 = (true + 3) * 'test' || 1 * 5 && (false + 'value') + 'end' || a--;
// let exp30 = 4test || 5 && '0valueend' ||  3
// let exp30 =  0valueend
// console.log(exp30);

// Q-31
// let exp31 = 3 + 'end' || 2 * 'test' && (++a + true) || 'start' + 1;
// let exp31 = 3end
// console.log(exp31);

// Q-32

// let exp32 = (0 + 3) * (true + false) || 5 * 'hello' + 2 && (false + 'test');
//let exp32 = 3
// console.log(exp32);

// Q-33
// let a = 4
// let exp33 = 2 + 3 && ('end' + a++) || (false + 'test') * 4 && 5;
//let exp33 = end4
// console.log(exp33);


// 34.
// let a = 4
// let exp34 = 'hello' + 4 * (false + a--) || 3 && 'start' + 1 || (true + 'test');
//let exp34 = 'hello' + 4*(4)
// let exp34 = hello16
// console.log(exp34);



// 35.
// let a = 4
// let exp35 = 'start' && (a-- || 'test') * 4 + 5 && (false + 'end') || 2;
//let exp35 = 'start'&& (4)
// console.log(exp35);
