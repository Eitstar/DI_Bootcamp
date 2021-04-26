// Exercise 1 : Scope

// #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }
//  alert a should be 3

//#2
// var a = 0;

// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a);
// }

//  alert a should be 0

//#3
// function q3() {
//     window.a = "hello";
// }


// function q32() {
//     alert(a);
// }

//  alert a should be undifiend


//#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }


//  alert a should be test



//#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);

//  alert a should be 5



// Exercise 2: Ternary Operator
// Change the conditional
//  into a ternary and assign the function to a variable called experiencePoints.

// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

// my answer :

// let experiencePoints = winBattle() ? 10 : 1;


// Exercise 3 : Colors
// Instructions
// Using this array:

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order: “1# choice is Blue.”“2# choice is Green.”“3# choice is Red.”ect…
// Hint: Use the array methods taught in class.

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// function myFunction() {
//     colors.forEach((color, i) => {
//         console.log(`${i}choice is, ${color} `)
//     });
// }
// myFunction();


// Exercise 4 : Colors #2
// Instructions
// Using these arrays :


// // Write a JavaScript program that displays the colors
// //     in the following order: “1 st choice is Blue.”“2 nd choice is Green.”“3 rd choice is Red.”ect…
// // Hint: Use the array methods taught in class.


// let ordinal = ["th", "st", "nd", "rd"];

// // let ordinal = ["th", "st", "nd", "rd"];
// // let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];



// // function secondFunction() {

// //     // for (j = 0; j < colors.length; j++) {

// //     colors.forEach((colors, j) => {
// //         if (j < 3) {

// //             console.log(`${ordinal[j+1]} choice is, ${colors} `)
// //         } else
// //             console.log(`${ordinal[0]} choice is, ${colors} `)
// //     });

// // }
// // secondFunction();




// // let ordinal = ["th", "st", "nd", "rd"];
// // let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];



// // function secondFunction() {

// // for (j = 0; j < colors.length; j++) {

// //     colors.forEach((colors, j) => {
// //         if (j < 3) {

// //             console.log(`${ordinal[j+1]} choice is, ${colors} `)
// //         } else
// //             console.log(`${ordinal[0]} choice is, ${colors} `)
// //     });

// // }
// // secondFunction();


// // Exercise 5: Is It A String ?


// // function that checks whether the value of an input is a string or not.
// // const string= () =>{

// // }
// // namefunc();


// function isString(param) {
//     if (typeof(param) === 'string') {
//         console.log('is a string');
//     } else {
//         console.log("isn't a string");
//     }
// };
// isString("string");
// isString(2);


// isString.typeof((param, 1) === 'string') => {
//     ('is a string' ? "isn't a string")
// }

//     isString("string");
//     isString(2);


// let bankAmount = 3000;
//     let vat = 1.17;
//     let details = ["+200", "-100", "+146", "+167", "-2900"]
// for (let i = 0; i < details.length; i++) {
//     bankAmount = bankAmount + details[i] * vat;
//     console.log(bankAmount);
// }