// Ex-1 

// let move = document.getElementById("animate")
// console.log(move);


// let start = 0;

// container.classList.add('container');
// animate.classList.add('animate');
// animate.setAttribute('id', 'animate');
// container.appendChild(animate);



// function myMove() {
//     let move = document.getElementById("animate")
//     let start = 0;
//     let id = setInterval(function() {
//         if (start == 350) {
//             clearInterval(id);
//         } else {
//             start++;
//             move.style.top = start + "px";
//             move.style.left = start + "px";
//         }
//     }, 5);
// }

// Ex -2 

function allowDrop(event) {
    event.preventDefault();
}


function allowEnter(event) {
    event.target.classList.add('over');
}

function allowLeave(event) {
    event.target.classList.remove('over');
}

function dragStart(event) {

    console.log("target:", event.target)
    console.log("id: ", event.target.id)
    event.dataTransfer.setData("text", event.target.id);
}

function dragDrop(event) {

    event.preventDefault();


    let data = event.dataTransfer.getData("text");
    console.log("data: ", data)

    let box = document.getElementById(data)
    event.target.appendChild(box);
}



let color = null;
let mousedown = false;
// get the body document
let body = document.getElementsByTagName("body")[0];
// all the elements in the sidebar class button and colors sidebar > * = all the children in sidebar
let colorBlocks = document.querySelectorAll(".sidebar > *");
// all the empty block 
let main = document.querySelector(".main ");
let clearButton = document.getElementsByTagName("button")[0];

for (let i = 0; i <= 1030; i++) {
    let creatEmptyBlock = document.createElement('div');
    main.appendChild(creatEmptyBlock);
}
let emptyBlock = document.querySelectorAll(".main >*");


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