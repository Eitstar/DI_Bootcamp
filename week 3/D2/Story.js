// // 1 Create an array which value is the planets of the solar system.
let listPlanents = "Mercury Venus Earth Mars Jupiter Saturn Uranus Neptune Pluto";
let arrPlanents = listPlanents.split(" ")
console.log(arrPlanents)

// arrPlanents = "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]

// For each planet in the array, create a < div > using createElement.
// This div should have a class named "planet".


// First I’d you need to declare where you do you want the added elements to be located 
// and becuse in this case its located in section(made out of array by
// default) there is a need to add where in the Array you want to it located
let inSection = document.getElementsByClassName("listPlanets")[0];
console.log(inSection)


// Each planet should have a different background color.
//     (Hint: add a new class to each planet).

// Then in order to add multiple elements one after another we created a loop inside a function.  inside it we added a for loop
//  .Now  we ordered it to loop through the entire length of the Array length with a  deduction of  one 
// . 2nd  stage of the for loop; We asked it to create the element in each loop.
//  3rd step we added a class for each loop( after it created a div) and we ask to name it and to add to the name a 2nd name taken from the array.
// Last step we need to append the added loop.
function planetDivs() {

    for (let j = 0; j <= arrPlanents.length - 1; j++) {
        let div = document.createElement("div");
        div.classList.add("planet", arrPlanents[j])
            // here you need to add where you want to add & what you want to add
        inSection.appendChild(div)


    }


}
planetDivs()

// arrPlanents = document.getElementsByClassName("planet");
// console.log(arrPlanents);