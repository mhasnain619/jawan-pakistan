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


// 36.
// let a = 4
// let exp36 = 1 + 'value' && (++a + 2) || (3 + 'result') * true && 4;
//let exp36 = 1value && (7) || (3result) * 1 && 4
// let exp36 = 7
// console.log(exp36);


// 37
// let exp37 = 'hello' && 2 + 'test' || (++a + 3) && (true + 'value') + 1;
// let exp37 = 2test
// console.log(exp37);


// 38.
// let a = 1
// let exp38 = 5 * (a-- || 'test') && 6 * 'result' || 2 + 'end';
//let exp38 = 5 * (test) && 2end
// let exp38 = 2end
// console.log(exp38);

// 39.
// let exp39 = 'start' && (false + 1) * 2 || 3 + 4 * 'hello' + 5 && 0;
//let exp39 = start && (2)
// let exp39 = 2
// console.log(exp39);

// 40.
// let a = 9
// let exp40 = (false || 'test') * 5 || 6 + (a-- && 'result') * 4;
// let exp40 = (test) * 5
// let exp40 = nan
// console.log(exp40);


// 41.
// let exp41 = 'start' && (3 + 2) * 'test' + 5 || 4 * (false + 1) && 'hello';
//let exp21 = hello
// console.log(exp41);

// 42.
// let a = 2
// let exp42 = 1 + 2 * 'end' || (false + 3) && 'result' * 4 + a--;
// let exp42 = nan
// console.log(exp42);


// 43.
// let a = 2
// let exp43 = (false && a--) || 4 * (3 + 2) && 'start' + 5;
// let exp43 = start5
// console.log(exp43);

// 44.
// let a = 2
// let exp44 = 3 + 2 * (true + 5) && 'value' + 1 || (++a + 2) + 'test';
// let exp44 = value1
// console.log(exp44);

// 45.
// let a = 4
// let exp45 = (false || 1) + ' test ' && 5 + (3 * a--) || ' end ' + 2;
//let exp45 = 1test && 17 || end2
// let exp45 = 17
// console.log(exp45);

// 46.
// let a = 4
// let exp46 = (2 * a-- + 4) && ' test ' || 3 + ' hello ' && (false + 1) * 5;
//let exp46 = (16) && 'test' || 3hello && (5)
// let exp46 = test
// console.log(exp46);

// // 47.
// let a = 4
// let exp47 = 0 + 'result' && (3 + 1) * 2 || (false + a--) * 'end';
//let exp47 = 0result && 4 || nan
// let exp47 = 0result && 8 || nan
// let exp47 = 8
// console.log(exp47);


// // 48.
// let a = 4
// let exp48 = (false || 1) * ' test ' && 4 || (true + 2) * ' hello ' + a--;
//let exp48 = nan && 4 || nan4
// let exp48 = nan
// console.log(exp48);


// 49.
// let a = 4
// let exp49 = (2 * 3) + ' result ' && 4 * (a-- + 1) || ' start ' + 2 + ' end ';
//let exp49 = 6result && 20 || start2end
// let exp49 = 20
// console.log(exp49);


// 50.
// let a = 4
// let exp50 = 32 && true - ++a && ' ' || ' true ';
// let exp50 = true - 5 && ' ' || true
// let exp50 = 4 && '' || 'true'
// let exp50 = ''
// console.log(exp50);


// 51.
// let a = 4
// let exp51 = (5 + 2) * (a-- + 1) || 'start' + (++a + 'end') * 3;
// let exp51 = (7) * (5) || 'start' + (nan)
// let exp51 = 35 || 'start' + (nan)
// let exp51 = 35
// console.log(exp51);


// 52.
// let a = 4
// let exp52 = (++a && 3) * 'test' || 4 + 'start' * (a-- + 'result');
// let exp52 = (5 && 3) * 'test' || 4 + nan
// let exp52 = (5) || 4 + nan
// let exp52 = nan
// console.log(exp52);


// 53.
// let a = 4
// let exp53 = 3 + 'value' * (++a + 1) || (a-- && 'start') + 'end';
//let exp53 = 3value * (6) || (4 && 'start') +'end'
//let exp53 = nan || startend
// let exp53 = startend
// console.log(exp53);



// 54.
// let a = 4
// let exp54 = (a-- + 2) * ' result ' || (false && 5) * ' test ' + 4;
//let exp54 = (6) * 'RESULT' || (0) * test4
// let exp54 = nan || nan
// let exp54 = nan
// console.log(exp54);



// 55.
// let a = 4
// let exp55 = ' start ' + 5 * (a-- + ' test ') || (false + 2) * ' value ';
// let exp55 = start + nan || nan
// let exp55 = nan
// console.log(exp55);



// 56.
// let a = 4
// let exp56 = 4 * (a-- + 1) + ' test ' || (++a + 3) * ' start ' + 5;
// let exp56 = 20test || nan
// let exp56 = 20test
// console.log(exp56);



// 57.
// let a = 4
// let exp57 = (3 * 'test' + 1) || (++a && a--) * 'result' || 'value';
//let exp 57 = (nan1) || (4) * result || value
// let exp57 = value
// console.log(exp57);



// 58.
// let a = 4
// let exp58 = (a-- + ' start ') * ' result ' || (false + 2) + ' end ' + 3;
// let exp58 =(4start) * 'result || (2) + end3
// let exp58 = nan || 2end3
// let exp58 = 2end3
// console.log(exp58);



// 59.
// let a = 4
// let exp59 = 5 * (a-- + 3) * ' test ' || (false && ' start ') + 2;
// let exp59  = 5 * (7) * 'test' || (0 && 'start') + 2
// let exp59 = nan || 2
// let exp59 = 2
// console.log(exp59);



// 60.
// let a = 4
// let exp60 = (a-- + ' value ') * ' test ' + 4 || (false + 2) * ' end ';
// let exp60 = (4value) * 'test4' || (2) * end
// let exp60 = nan || nan
// let exp60 = nan
// console.log(exp60);


// 61.
// let a = 4
// let exp61 = 3 + (++a + ' result ') || (a-- + 2) * ' test ' + 5;
// let exp61 = 3 + (5result) || (6) * test5
// let exp61 = 35result || nan
// let exp61 = 35result
// console.log(exp61);



// 62.
// let a = 4
// let exp62 = ' start ' + (a-- + ' test ') * 3 || (false && 4) * ' end ' + 5;
// let exp62 = start + (4test) * 3 || (0) * end5
// let exp62 = start + nan || nan
// let exp62 = start nan
// console.log(exp62);


// // 63.
// let a = 4;
// let exp63 = (++a + 2) * ' test ' || ' value ' + (a-- + 3) * ' result ';
//let exp63 = (7) * 'test' || 'value' + (7) * 'result'
// let exp63 = nan || value + nan
// let exp63 = value nan
// console.log(exp63);




// // 64.
// let a = 4;
// let exp64 = 5 * 'end ' + (a-- + 1) * ' test ' || ' start ' + (false && ' result ');
// let exp64 = nan + (5) * 'test' || 'start' + (0)
// let exp64 = nan + nan || start0
// let exp64 =start0
// console.log(exp64);



// // 65.
// let a = 4;
// let exp65 = ' value ' + 3 * (a-- + ' test ') || (false + 1) * ' end ';
// let exp65 = value + * (nan) || (1) * 'end'
// let exp65 = value nan
// console.log(exp65);



// // 66.
// let a = 4;
// let exp66 = (++a + ' test ') * 2 && (a-- + 1) * ' start ' + ' result ';
// let exp66 = (nan) || (nanresult)
// let exp66 = nanresult
// console.log(exp66);



// // 67.
// let a = 4;
// let exp67 = ' start ' + (a-- + 3) * ' end ' || (++a + ' test ') * 5;
// let exp67 = startnan || (nan)
// let exp67 = startnan
// console.log(exp67);



// // 68.
// let a = 4;
// let exp68 = 2 * (a-- + 1) + ' result ' || (false && ' start ') * 3;
// let exp68 = 10result || 0
// let exp68 = 10result
// console.log(exp68);



// // 69.
// let a = 4;
// let exp69 = 4 + (a-- + ' test ') * 5 || (false + 2) * ' start ';
// let exp69 = 4 + (nan) || nan
// let exp69 = nan
// console.log(exp69);



// // 70.
// let a = 4;
// let exp70 = (a-- + 2) * ' result ' || (false && ' end ') + 3;
// let exp70 = nan || (3)
// let exp70 = nan
// console.log(exp70);



// // 71.
// let a = 4;
// let exp71 = ' test ' + 2 * (a-- + 3) || (false && ' start ') + 4;
// let exp71 = test14 || 4
// let exp71 = test14
// console.log(exp71);



// // 72.
// let a = 4;
// let exp72 = 3 * (a-- + ' value ') || (false + 2) * ' test ';
//let exp72 = 3 *(4value) || 2test
// let exp72 = nan
// console.log(exp72);
// // 73.
// let a = 4;
// let exp73 = (a-- + ' test ') * 4 || (false + 1) * ' result ' + ' start ';
//let exp73 = (4test) * 4 || nanstart
// let exp73 = nan
// console.log(exp73)





// // 74
// let a = 4;
// let exp74 = (++a + 5) * ' end ' || (a-- + 2) * ' result ' + ' start ';
// let exp74 = nan || nanstart
// let exp74 = nanresult
// console.log(exp74);



// // 75.
// let a = ''
// let exp75 = (3 * ' test ') + (a-- + ' start ') || (false + 1) * ' result ';
// let exp75  = (nan) + (start) || (nan)
// let exp75 = nan
// console.log(exp75);

