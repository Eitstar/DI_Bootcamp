// In the < div > above,
//     change the value of the id attribute from navBar to socialNetworkNavigation,
//     using the setAttribute method.



// let barName = document.getElementById("navBar");

// barName.setAttribute("id", "socialNetworkNavigation");
// console.log(barName)

// 2// We are going to add a new <li> to the <ul>.
// 1// First, create a new <li> tag (use the createElement method).
// 2 Create a new text node with “Logout” as its specified text.
// 3 Append the text node to the newly created list node (li).
//  4 Finally, append this updated list node to the unordered list above, using the appendChild method.v 4
//

// let node = document.createElement("LI");
// let textnode = document.createTextNode("Logout");
// node.appendChild(textnode);
// document.getElementById("newLi").appendChild(node);


// 3. Bonus
// Use the firstElementChild and the lastElementChild
// properties to retrieve the first and last li elements from their parent element(ul).
// Display the text of each link.(Hint: use the textContent property).

// let newLif = document.getElementById("fst").firstElementChild.textContent;
// console.log(newLif)
// let newLil = document.getElementById("las").lastElementChild.textContent;
// console.log(newLil)


// Exercise 2 : Users
// In the HTML above change the name“ Pete” to“ Richard”.

// let bartext = document.getElementsByClassName("nameLi2");
// console.log(bartext)

// bartext.textContent = ("Richard");
// console.log(bartext)

// Change each first name of the two <ul>'s to your name.


// let myName = document.getElementsByClassName("nameLi1");
// console.log(myName)

// myName.textContent = ("Eitan");
// console.log(myName)



// 3. At the end of each < ul > add a < li > that says“ Hey students”.

// for (let list = 0; list <= 1; list++) {
//     let node = document.createElement("LI");
//     let textnode = document.createTextNode("Hey students");
//     node.appendChild(textnode);
//     document.getElementsByClassName("list")[0];
//     console.log("Hey students");
// }


// let node1 = document.createElement("LI");
// let textnode1 = document.createTextNode("Hey students");
// node1.appendChild(textnode1);
// document.getElementsByClassName("list1");
// console.log("Hey students");
// let node = document.createElement("LI");
// let textnode = document.createTextNode("Hey students");
// node.appendChild(textnode);
// document.getElementsByClassName("list");

// Delete the name Sarah from the second < ul > .


// let remText = document.getElementById("rem");
// remText.remove();

// Exercise 3 : Users And Style
// 1 Add a“ light blue” background color and some padding to the < div > .

// let padCol = document.getElementsByTagName("div");
// console.log(padCol);

// padCol.setAttribute("style", "div");
// console.log(padCol);

// 2 Do not display the first name(John) in the list.

// let remText = document.getElementById("noto");
// remText.remove();
// console.log(remText)

// 3 Add a border to the second name (Pete)

// let addbor = document.getElementById("bor");
// console.log(addbor);

// addbor.setAttribute("style", "bor");
// console.log(addbor);

// Change the font size of the whole body.

// let padCol = document.getElementsByTagName("div");
// console.log(padCol);

// padCol.setAttribute("style", "div");
// console.log(padCol);


// let textSi = document.getElementsByTagName("body");
// console.log(textSi)

// textSi.setAttribute("style", "body");
// style.fontSize = "x-large";

// Bonus: If the background color of the div is “light blue”,
// alert“ Hello x and y”(x and y are the users in the div).


// let padCol = alert(`Hello! ${"John"} and ${"Pete"} I am an alert box!`);