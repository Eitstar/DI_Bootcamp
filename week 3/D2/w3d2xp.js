// XP

// 1 Using DOM methods,
// remove the last paragraph in the <
//     article > tag from the DOM.

// 2nd move from the parent to the child 
// 3rd mark the lase Element so it can be removed


// 1stlocate the parent
let parRem = document.getElementsByTagName("article")[0]
console.log(parRem)

// let parent = document.getElementsByTagName('article')[0];
// console.log(parent);


// let childElem = parent.lastElementChild;
// console.log(parent.lastElementChild);
// childElem.remove();

// 2 :

let backCol = document.getElementsByTagName("h2")[0];
console.log(backCol);
backCol.addEventListener("click", function() {
    backCol.style.backgroundColor = "blue"
})


let fontsz = document.getElementsByTagName("h1")[0];

fontsz.setAttribute("h1", (Math.random() * 100));
console.log(fontsz);

// 4
// let hideh = document.getElementsByTagName("h3")[0];
// console.log(hideh);
// hideh.addEventListener("click", function() {
//     hideh.style.display = "none";

// })

// 5
let button = document.getElementsByTagName("p");
console.log(button)
let addbutton = document.createElement("button");
button.appendChild(addbutton);
addbutton.addEventListener("click", function() {
    addbutton.style.fontWeight = 'bold';
})