// Exercise 1 : Favorite Color

// let me = ["my", "favorite", "color", "is", "blue"]
// let newMe = me.join();
// console.log(newMe);

// my, favorite, color, is, blue


// Exercise 2: Mixup

// Create 2 variables.The values should be strings.For example:

//     Slice out and swap the first 2 characters of the 2 strings from part 1.
// Create a third variable where the value is the concatenation of the two strings from the part 1(separated by a space).
// Finally console.log the new concatenated string.
// Some Examples

// let str1 = "mix"
// let str2 = "pod"



// let str3 = str1.slice(0, 2) + str2.slice(2, 3);
// console.log(str3)

// let str4 = str2.slice(0, 2) + str1.slice(2, 3);
// console.log(str4)

// let strNew = str4 + " " + str3;
// console.log(strNew)



// Exercise 3: Calculator

// Make a Calculator.

// 1. Prompt the user
// for the first number.
// 2. Store the first number in a variable called num1.
// 3. Prompt the user
// for the second number.
// 4. Store the second number in a variable called num2.
// 5. Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!

let num1 = prompt("pick a number");
// console.log(num1)
let num2 = prompt("pick a number");
// console.log(num2)
// (Number will add the 1st prompt to the 2nd, to bee shown on the alert)
let sum = Number(num1) + Number(num2)
alert(`sum of both number is: ${sum }`);