let xhr = new XMLHttpRequest(); //step 1
let temp;
// let character = document.getElementsByTagName("h3")
// let height = document.getElementsByTagName("h3")
// let gender = document.getElementsByTagName("h3")
// let birthYear = document.getElementsByTagName("h3")
// let homeWorld = document.getElementsByTagName("h3")
let button = document.getElementById("button") //step 11


function fetchData() { //12 to add all of the ajax to a funcation 
    //       loding()
    rlet randomNumbe = Math.floor((Math.random() * 82) + 1); // step 11
    xhr.open('GET', `https://swapi.dev/api/people/${randomNumber}/`) //step 2
    xhr.responseType = 'json'; // step 7
    xhr.send(); //step 3
    xhr.onload = function() { //step 4-6
        if (xhr.status != 200) {
            console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        } else { 
            temp = xhr.response.homeworld
            console.log(temp)
            showData(xhr.response);  //step 10 calling the ShowData function
            getHomeWorld(temp)
        }
    }
}






(async function getHomeWorld(temp) {
    console.log(temp)
    const getHomeWorld = await fetch(temp)
    console.log(getHomeWorld)
    const data = getHomeWorld.json();
    console.log(data)
    return data

    //     try {
    //         let planet = await fetch(temp);
    //         console.log(planet)
    //         let results = await planet.json();
    //         console.log(results)
    //         return results
    //     } catch (error) {

    //         console.log(error, "catch wasent so good")
    //     }

})().then(res =>
        console.log(res))
    .catch(err =>
        console.log(err)
    )





// async function showData(results) { //step 9  up to step 32 added the data to the root div
//     //  using createElement--setAttribute & appendChild

//     let character = document.createElement("h3")
//     let height = document.createElement("h3")
//     let gender = document.createElement("h3")
//     let birthYear = document.createElement("h3")
//     let homeWorld = document.createElement("h3")
//     character.setAttribute('src', results.name)
//     height.setAttribute('src', results.height)
//     gender.setAttribute('src', results.gender)
//     gender.setAttribute('src', results.birthYear)
//     homeWorld.setAttribute('src', results.homeWorld)
//     character.innerHTML = `Name: ${results.name}`
//     height.innerHTML = `Height: ${results.height}(cm)`
//     gender.innerHTML = `Gender: ${results.gender}`
//     birthYear.innerHTML = `Birth Year: ${results.birth_year}`
//         // homeworld = results.homeworld
//         // console.log(homeworld)
//     homeWorld.innerHTML = `Home World: ${'x'}` //await getHomeWorld(results.name
//     root.appendChild(character)
//     root.appendChild(height)
//     root.appendChild(gender)
//     root.appendChild(birthYear)
//     root.appendChild(homeWorld)

// }

function loding() {

    character.innerText = `< i class = "fas fa-spinner fa-pulse" >Loding < /i> `
    height.innerText = ''
    gender.innerText = ''
    birthYear.innerText = ''
    homeWorld.innerText = ''
}

button.addEventListener('click', fetchData) //step 8