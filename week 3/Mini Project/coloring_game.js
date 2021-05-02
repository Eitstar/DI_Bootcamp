let color = null;
let mousedown = false;

// let leftScreen = document.getElementById("leftSide");
// console.log(leftScreen)

function leftDiv() {
    for (let i = 0; i < 21; i++) {
        let newdiv = document.createElement("div")
        addEventListener
        newdiv.classList.add("leftDivs", [i])
        random = Math.floor(Math.random() * newdiv.length)
        newdiv[i];

        leftScreen.appendChild(newdiv)
    }
}
// leftDiv()
let addedDivs = document.getElementsByClassName(" main")[0];
console.log(addedDivs)
let clearButton = document.getElementsByTagName("button")[0];

let colorBlocks = document.querySelectorAll(".sidebar > *");

for (let i = 0; i < 1000; i++) {
    let addedDivs = document.createElement("div")
    addEventListener
    addedDivs.classList.add("right", [i])
    main.appendChild(addedDivs)
}
// for (let i = 0; i <= 1030; i++) {
//     let rightSide = document.createElement('div');
//     main.appendChild(rightSide);
// }
let emptyBlock = document.querySelectorAll(".main > *");


clearButton.addEventListener("click", function() {
    for (let block of emptyBlock) {
        block.style.backgroundColor = "white";
    }
});

body.addEventListener("mousedown", function() {
    mousedown = true;
})

body.addEventListener("mouseup", function() {
    mousedown = false;
})


for (let colorBlock of colorBlocks) {
    colorBlock.addEventListener("click", function(event) {
        color = event.target.style.backgroundColor;
    });
}

for (let fillBlock of emptyBlock) {
    fillBlock.addEventListener("mousedown", function(event) {
        if (color != null) event.target.style.backgroundColor = color;
    });

    fillBlock.addEventListener("mouseover", function(event) {
        if (mousedown && color != null) event.target.style.backgroundColor = color;
    });
}