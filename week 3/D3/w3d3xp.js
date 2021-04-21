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