//step 1 funaction to fetch the URL & return the data
//step 1 in the funcation add the fun for random number (in the url) DONE 
// a 3rd fun that will be able to add a url for the homeworld 
// add another funation that will actovate the button 
// create dive via DOM that will add the URL text
let randomNumber = 1;

let character = document.createElement("h3")
let height = document.createElement("h3")
let gender = document.createElement("h3")
let birthYear = document.createElement("h3")
let homeWorld = document.createElement("h3")
character.setAttribute("class", "character")
height.setAttribute("class", "height")
gender.setAttribute("class", "gender")
birthYear.setAttribute("class", "birthYear")
homeWorld.setAttribute("class", "homeWorld")
let root = document.querySelector("#root")
root.appendChild(character)
root.appendChild(height)
root.appendChild(gender)
root.appendChild(birthYear)
root.appendChild(homeWorld)

//when creating a Funation  to fetch data 
const randomChracter = async() => {
        let url = `https://swapi.dev/api/people/${randomNumber}/`
        let response = await fetch(url)
        let data = response.json();
        return data
    }
    // setTimeout(() => {
    //     loding()
    // }, 1000);

setInterval(() => {

    randomChracter()

    .then(res => {
            (async function homeWorld() {
                let url = res.homeworld
                let response = await fetch(url)
                let data = response.json();
                return data
            })().then(res => {
                const plant = res.name
                homeWorld.innerHTML = `Home World: ${plant}`
            })
            console.log(res)
            character.innerHTML = `Name: ${res.name}`
            height.innerHTML = `height: ${res.height}`
            gender.innerHTML = `gender: ${res.gender}`
            birthYear.innerHTML = `birth Year: ${res.birth_year}`
        })
        .catch(err => {
            console.log(err)
        })

}, 1000)

// function loding() {

//     character.innerText = Loding`
//     height.innerText = ''
//     gender.innerText = ''
//     birthYear.innerText = ''
//     homeWorld.innerText = ''
// }


function changeChracter() {
    return randomNumber = Math.floor((Math.random() * 82) + 1);

}