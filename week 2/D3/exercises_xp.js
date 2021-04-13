// Exercise 1 : Your Favorite Colors
// Create an array called colors where the value is a list of your favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

// *** always console.log the array
// colors arry [](let)
// step 1;

// let colors = "yellow red blue purple orange";
// let sentence = colors.split(" ");
// step 2;
 
// let colors = ["yellow", "red", "blue", "purple", "orange"];
// let sentence;
// for (let i = 0; i < colors.length; i++) {
//     let sentence = `My #${i+1} choice is ${colors[i]}`;
//     console.log(sentence)
// }
// b

// step #3

// let colors =["yellow", "red", "blue", "purple", "orange"]
// let suffixes = ["st", "nd", "rd", "th"]
// let sentence;
// for (let i = 0; i < colors.length; i++) {
//     if (i < 3) {
//         sentence = `My ${i+1} ${suffixes[i]} color is ${colors[i]}`;
//         console.log(sentence)
//     } else if (i >= 3) {
//         sentence = `My ${i+1} ${suffixes[3]} color is ${colors[i]}`;
//         console.log(sentence)
//     }





// Exercise 2 : List Of People

// Write code to remove “Greg” from the people array.
// Write code to replace “James” to “Jason”.
// Write code to add your name to the end of the people array.
// Using a loop, iterate through the people array and console.log each person.
// Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.
// Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.
// Write code that console.logs Mary’s index. take a look at indexOf on google.
// Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1
// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

// let people = ["Greg", "Mary", "Devon", "James"]
// console.log(people);
// 1// Write code to remove “Greg” from the people array.

//  people.splice(0, 1)
// console.log(people);


// 2 & 3 Write code to replace “James” to “Jason”.

// let people = ["Mary", "Devon", "James"];
// people.splice(2, 2, "jason, Eitan");
// console.log(people);

// ["Mary", "Devon", "jason"]

// 4.Write code to add your name to the end of the people array.

// let people = ["Mary", "Devon", "jason"]
// console.log(people);


// 4. Using a loop, iterate through the people array and console.log each person.


// let pepole = ["Mary", "Devon", "jason", "Eitan"]

// for (
//     let i = 0; i < pepole.length; i++) {
//     console.log(pepole[i]);
// }

// 5.Using a loop,
//  iterate through the people array and after you 
//  console.log “Jason” exit the loop.

// let pepole = ["Mary", "Devon", "jason", "Eitan"]

// for (
//     let i = 0; i <= pepole.length; i++) {
//     if (i !== 2)
//         console.log(pepole[i]);
//     else if (i == 2)
//         break;
// }

// 6. // Write code to make a copy of the people array using slice.
//  The copy should NOT include “Mary” or your name

// let pepole = ["Mary", "Devon", "jason", "Eitan"]
// let remove = pepole.splice(1, 2);
// console.log(remove);


// 7. Write code that console.logs Mary’s index. 
// take a look at indexOf on google.


// let find = ["Devon", "jason"];
// console.log(find.indexOf("Mary"));


//8 Write code that gives the indexOf “Foo” (this should return -1).
//  Why does it return -1

// let find = ["Devon", "jason"];
// console.log(find.indexOf("Foo"));

// in any
// case it will
// return of - 1 it means it 's simply there is no value eqrual in this array 

// 9.Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?


// let last = find.length-1
// console.log(lat);




// Exercise 3 : Repeat The Question
// Promt the user for a number, 
// while the number is smaller than 10 continue asking
//  the user for a new number.
// Tip : Which while loop is more relevant for this situation?

// let user = prompt("please, insert a Number")

// while (user < 10) {
//     console.log("out of the woods")
//     user = prompt(" insert a Number")
// }


// Exercise 4 : Attendance


// Given the object above where the key is the
// students name and the value is the country they are from.
// 1. Prompt the student for their name :
// * If the name is in the object, console.log the name of the student and the country they come from.
// example: "Hi! I'm [name], and I'm from [country]."
// * Hint: Look up the statement if ... in
// * If the name is not in the object, console.log: "Hi! I'm a guest."

// let guestList = {
//     randy: "Germany",
//     karla: "France",
//     wendy: "Japan",
//     norman: "England",
//     sam: "Argentina"
// }

// let name = prompt("Hi student, what is your name?")

// if (guestList[name] !== undefined) {
//     console.log(`Hi! I'm ${name}, and I'm from ${guestList[name]}`);
// } else {
//     console.log("Hi! I'm a guest.");
// }







// Exercise 5 : Family

// Create an object called family with a few key value pairs.
// Console.log the keys. (using a for loop).
// Console.log the values. (using a for loop).

// let family = {
//     dad: 1,
//     mom: 2,
//     sister: 3,
// }

// Console.log the keys. (using a for loop).

// for (key in family) {
//     console.log(`${key}: ${family[key]}`)
// }



// Exercise 6
// Instructions
// let details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// Given the object above, console.log “my name is Rudolf the raindeer”

let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
let i = '';
for (property in details) {
    i += property;
    i += ' ';
    i += details[property];
    i += ' ';
}
console.log(i);



// Exercise 7 : Secret Group
// Instructions
// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society.

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]