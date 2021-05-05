let color;
let mousedown = false;

let body = document.getElementsByTagName("body")[0];

let colorBlocks = document.querySelectorAll(".sidebar > *");

let main = document.querySelector(".main ");
let clearButton = document.getElementsByTagName("button")[0];

for (let i = 0; i <= 1039; i++) {
    let creatEmptyBlock = document.createElement('div');
    main.appendChild(creatEmptyBlock);
}
let emptyBlock = document.querySelectorAll(".main > *");
console.log(emptyBlock)

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