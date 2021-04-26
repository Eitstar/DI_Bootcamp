const gameInfo = [{
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];
let userArray = [];
gameInfo.forEach((item) => {
    // console.log(item.username + "!")
    if (item.score >= 5) {
        userArray.push(item.username + "!");
    }
});
console.log(userArray);
// for (let 0 > i; i > )




//     console.log(item.username);