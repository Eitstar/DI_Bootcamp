// // 1 Create an array which value is the planets of the solar system.
let listPlanents = "Mercury Venus Earth Mars Jupiter Saturn Uranus Neptune Pluto";
let arrPlanents = listPlanents.split(" ")
console.log(arrPlanents)

// arrPlanents = "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]

// For each planet in the array, create a < div > using createElement.
// This div should have a class named "planet".

let inSection = document.getElementsByClassName("listPlanets");
console.log(inSection)

// for (let j in arrPlanents) {
//     console.log(arrPlanents[j])
// }

for (let j = 0; j <= arrPlanents.length; j++) {
    let list = document.createElement("div");
    list.classList.add(`planet${j}`)
    console.log(list)
}