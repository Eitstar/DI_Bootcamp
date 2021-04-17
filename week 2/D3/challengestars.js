// let star = "* "
// ​
// ​
// for (let index = 1; index <= 6; index ++){
//    if (index % 2 == 0 || index == 1){ 
//       console.log(`%c${star}` + `%c${star.repeat(index -1)}`, "color: darkgreen;", "colorbla: ck;")
//    }
//    else {
//    console.log(star.repeat(index))
// }
// }
​​

// let stars = " ";
// for (let i = 0; i <= 5; i++) {

//     stars = stars + "*";
//     console.log(stars)

// }




// let stars = [];
// for (let i = 1; i < 7; i++) {
// 	let line = ""
// 	for (let counter = 1; counter < 7; counter++) {
// 		line += "* "
// 	}
// 	stars.push(line);
// }
// console.log(stars.join("\n"));

//  if you want to display each coloer & each letter in each color


let colors = ["blue", "red", "lightblue"];

// loop through each color
// console.log (colors[i]) -->
// console.log the letters of each color

// let colors = ["blue", "red", "lightblue"];
​
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i])
    for (let j = 0; j <= colors[i].length - 1; j++) {
        console.log(colors[i][j])
    }
}