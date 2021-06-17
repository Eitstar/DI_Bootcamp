const pokemonImg = document.querySelector('#pokemonImg');
const pokemonInfo = document.querySelector('#pokemonInfo ');
// console.log(pokemonImg);
//  console.log(pokemonInfo );

const loading = () => {
    setTimeout(() => {
        pokemonImg.innerHTML = `<img  src="http://www.complicite.org/_images/loading.gif"  width="100px" height="100px">`
        pokemonInfo.innerHTML = ''
    }, 0.5)
}

const fetchData = async() => {
    //     loading()
    //     setTimeout(() => {
    let ramdom = Math.floor((Math.random() * 800) + 1);
    try {
        let fetching = await fetch(`https://pokeapi.co/api/v2/pokemon/${ramdom}`);
        let respnse = await fetching.json();
        console.log(respnse);
        return respnse
    }
    //     }, 500)
    catch (err) { console.log(err) };
}

const displyData = async() => {
    try {
        let pokemon = await fetchData()

        //         console.log(pokemon.sprites.front_default)
        const pokImg = document.createElement('div');
        pokImg.innerHTML = `<img src="${pokemon.sprites.front_default}">`
        pokemonImg.appendChild(pokImg)
        textData()
    } catch (err) { console.log(err) };
}

const textData = async() => {
    try {
        let pokemon = await fetchData()
        const pokdata = [pokemon.id, pokemon.name, pokemon.height, pokemon.weight, pokemon.types[0].type.name]
        console.log(pokdata);

        let pokText = document.createElement('div');
        pokText.setAttribute('class', "textDiv");
        pokText.innerHTML = `<h3>Name:${pokdata[1]}</h3><P><b>Id</b>: ${pokdata[0]}</p><P><b>Weight</b>: ${pokdata[3]}</p><P><b>Height</b>: ${pokdata[2]}</p><P><b>Type</b>: ${pokdata[4]}</p>`
        pokemonInfo.appendChild(pokText);

    } catch (err) { console.log(err, pokemonImg.innerHTML = 'Oh no! That Pokemon isn’t available…') };
}









//         pokdata.forEach(el => {
//         pokText.innerHTML = `<h3>${pokdata}</h3>`
//         pokdata.innerHTML = `<h3><b>Name</b>:${pokemon.name}</h3>`
//         pokText.log(pokemon.id)
//         console.log(pokemon.name)
//         console.log(pokemon.height)
//         console.log(pokemon.weight)
//         console.log(pokemon.types[0].type.name)
//         });
//  const pokText = document.createElement('div');



//  pokName.forEach(el => {
//             let pokel = document.createElement('div')
//             pokel.innerHTML = `${el.name}`
//             console.log(`${el.name}`);
//             pokemonImg.appendChild(pokel)
//         });