// Part I

// const urls = [
//     'https://swapi.dev/api/people/1',
//     'https://swapi.dev/api/people/2',
//     'https://swapi.dev/api/people/3',
//     'https://swapi.dev/api/people/4'
// ]

// function fetchData(urlArray) {
//     Promise.all(urlArray.map(url => fetch(url)
//         .then(res => res.json())
//         .then((res) => console.log(res))
//         .catch((err) => console.log('ughhhhh fix it!', err))
//     ))
// }
// fetchData(urls)


// Part II
const urls = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.ddev/api/people/3',
    'https://swapi.dev/api/people/4'
]

function fetchData(urlArray) {
    Promise.all(urlArray.map(url => fetch(url)
        .then(res => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log('ughhhhh fix it!', err))
    ))
}
fetchData(urls)