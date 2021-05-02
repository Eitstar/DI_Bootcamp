// i wasent able to retrieve the input like we were supposed to

let locate = document.getElementsByClassName("robo");
let nav = document.createElement("div");

let grid = document.createElement("div");
let footer = document.createElement("footer");
let input = document.createElement("input");
let title = document.createElement("h2");
let form = document.createElement("form");

input.setAttribute('id', 'input')
nav.setAttribute('id', 'nav');
form.setAttribute('id', 'form');
grid.setAttribute('id', 'grid');
input.setAttribute('placeholder', 'Search for your robot');
title.innerText = 'Robo Friends'
robo.appendChild(nav);
robo.appendChild(grid);
robo.appendChild(footer);
nav.appendChild(title);
nav.appendChild(form);
nav.appendChild(input);


// console.log(nav)
// console.log(form)
// console.log(grid)
// console.log(input)
// console.log(title)
const robots = [{
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patri Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },


];

for (let i = 0; i < robots.length; i++) {
    let robinfo = document.createElement('div');

    let roboName = document.createElement('h3');
    let roboImg = document.createElement('img');
    let roboEmail = document.createElement('h4');
    robinfo.classList.add(robots[i].username)
    roboImg.classList.add('num' + robots[i].id)
    roboName.innerText = robots[i].name
    roboImg.setAttribute('src', robots[i].image);
    roboEmail.innerText = robots[i].email
    robinfo.appendChild(roboImg);
    robinfo.appendChild(roboName)
    robinfo.appendChild(roboEmail);
    grid.appendChild(robinfo);


}

const searchbox = () => {
    let myInput = document.getElementsByTagName('input')[0].value
    let filteredRobots = robots.filter(item => {
        if (item.name.includes(myInput)) {
            console.log(item)
            return item
        }
    })

    console.log(filteredRobots)
}
addEventListener('keyup', searchbox)


footer.setAttribute('id', 'footer');

const copyRight = document.createElement("p");
copyRight.innerText = ("Eitan Marks 2021 ")
footer.appendChild(copyRight);

// console.log(footer)



// window.onload = function() {
//     Particles.
//     init
//         ({
//             selector: '.background'
//         });
// }




//////////////////////////////////////////////////////

// this is my draft
//     // // let locate = document.getElementById("robo");
//     // // console.log(locate);

// // // // locate.addEventListener("click",function(e))

// // // const parentDiv = document.createElement("div");
// // // robo.appendChild(parentDiv);
// // // console.log(parentDiv);

// // // const addForm = document.createElement("form");
// // // parentDiv.appendChild(addForm);
// // // console.log(addForm);


// // // const inputForm = document.createElement("input")
// // // inputForm.setAttribute("type", "search");
// // // inputForm.innerHTML = "Search"
// // // addForm.appendChild(inputForm);
// // // console.log(inputForm);


// // // const centerDiv = document.createElement("div");
// // // roob.appendChild(centerDiv);
// // // console.log(centerDiv);



// // // const roboFriends = (robots) => {

// // //     for (let i = 1; i < 10; i++) {
// // //         let centerDiv = document.createElement("Div");
// // //         // newDiv.setAttribute(robots);
// // //         centerDiv.classList.add("robot")
// // //         roob.appendChild(centerDiv);
// // //         // newDiv.classList.add("toppings");
// // // 
// // //     }
// // //     return console.log(centerDiv)
// // // }

// // // roboFriends(robots)