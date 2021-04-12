// Exercise 1:
// Using this array :

// let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove Banana from the array.
// 2.Sort the array in alphabetical order.
// 3. Add “Kiwi” to the end of the array.
// 4.vRemove “Apples” from the array. Don’t use the same method as in part 1.
// 5. Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:
// ["Kiwi", "Oranges", "Blueberries"]
// console.log(fruits.length); //

// 1. Remove Banana from the array.:

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// console.log(fruits);

fruits.splice(0, 1);
console.log(fruits);


// 2.Sort the array in alphabetical order

// let fruits = ["Apples", "Oranges", "Blueberries"];
// fruits.sort();
// console.log(fruits);


//  fruits=["Apples", "Blueberries", "Oranges"];

// 3. Add “Kiwi” to the end of the array.

// let fruits = ["Apples", "Blueberries", "Oranges"];
// fruits.push("Kiwi")
// console.log(fruits);

//  ["Apples", "Blueberries", "Oranges", "Kiwi"]


// 4.Remove “Apples” from the array. Don’t use the same method as in part 1.

// let fruits =   ["Apples", "Blueberries", "Oranges", "Kiwi"];
// let fruits2 = fruits.slice(1, 4);
// console.log(fruits2);

// ["Blueberries", "Oranges", "Kiwi"]
// *** 2Option :
//  let fruits =   ["Apples", "Blueberries", "Oranges", "Kiwi"];
// fruits.shift();
// console.log(fruits);




//  5. Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:


// let fruits = ["Blueberries", "Oranges", "Kiwi"];
// fruits.reverse();
// console.log(fruits)

// not a good option here 

// fruits.sort();

// Exercise 2:
// Access and then console.log “Oranges”:


// let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// let orange = moreFruits[1][1]
// console.log(orange)