// Exercise 1: Keyless Car

// 1. Ask the user for their age, and save the value to a variable. Create a

// let userAge = prompt("How old are you?");

// console.log(userage)



// 2.

// function called checkDriverAge() that will notify the user


// function checkDriverAge() {
//     let userAge = prompt("How old are you?");
//     if (userAge < 18) {
//         alert("Sorry, you are too young to drive this car.Powering off");
//     } else if (userAge > 18) {
//         alert("You are old enough to drive, Powering On.Enjoy the ride!”");
//     } else if (userAge = 18) {
//         alert("Congratulations on your first year of driving.Enjoy the ride!”");
//     }
// }
// checkDriverAge()


// 3 Instead of using prompt to ask the user
// for their age,
// have the checkDriverAge()
// function accept an argument age.


// function checkDriverAge(userAge) {
//     if (userAge < 18) {
//         alert("Sorry, you are too young to drive this car.Powering off");
//     } else if (userAge > 18) {
//         alert("You are old enough to drive, Powering On.Enjoy the ride!”");
//     } else if (userAge === 18) {
//         alert("Congratulations on your first year of driving.Enjoy the ride!”");
//     }
//     console.log(checkDriverAge)
// }
// checkDriverAge()



// Exercise 2: What’ s In My Wallet ?

// Given a item price and an array representing the amount of change in your pocket,
//  determine whether or not you can afford the item.
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// Quarters = 0.25
// Dimes = 0.10
// Nickels = 0.05
// Pennies = 0.01
// To illustrate:
//     changeEnough([25, 20, 5, 0], 4.25) should
// return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25(the total amount due)

// Examples

// changeEnough([2, 100, 0, 0], 14.11)➞ false
// changeEnough([0, 0, 20, 5], 0.75)➞ true


// Exercise 3: Find The Multiples Of 23

// function that console.logs all multiples of 23 less than 500,
//     at the end
// return the sum of all the multiples.

// function multiples() {
//     let sum = 0
//     for (let i = 0; i <= 500; i++) {
//         if (i % 23 === 0) {
//             console.log(i)
//             sum += i
//         }

//     }
//     return console.log(`sum of:${sum}`)
// }

// multiples()


// Exercise 4: Amazon Shopping

// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100,
// }
// let items = prompt("chossen item from the amazonBasket list ")

// function checkBasket(obj) {
//     if (items in obj) {
//         //         console.log(items)
//     } else {
//         console.log("we don't have it")
//     }
// }
// checkBasket(amazonBasket)


// Exercise 5: Shopping List
// from your instructions i didn't understand how both arrays need to be listed so i wasn't able to complete this exercise
// let stock = {
//     "banana": 6,
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry": 1
// }

// let prices = {
//     "banana": 4,
//     "apple": 2,
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry": 10
// }


// shoppingLists = Object.keys(stock)
// console.log(shoppingList1)

// let shoppingList = ["banana", "apple", "pear", "orange", "blueberry"]

// function myBill() {
// for (let i = 0; i < shoppingList.length; i++) {
//     console.log(shoppingList)
//         console.log(nshoppingListme[i].indexOf(
//     }
//     if {} else {}
//     ()
// }
// {
//     ()
// }
//     myBill()


// Exercise 6 : Tips

// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// The calculator has the following rules:
// 1. Tip 20% when the bill is less than $50,
// 2. Tip 15% when the bill is between $50 and $200,
// 3. Tip 10% if the bill is more than $200.

let tip1


// Ask John for the amount of the bill.
// Create the program explained above.
// In the end, John would like to know:
// Tip amount.
// Final bill (bill + tip).
// (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)