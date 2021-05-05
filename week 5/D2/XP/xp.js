// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

// xhr.withCredentials = false;

// xhr.responseType = 'json';
// // xhr.responseType = 'document';
// xhr.send();
// xhr.onload = function() {
//     if (xhr.status != 200) {

//         console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//     } else {
//         let data = xhr.response.data
//         console.log(data);
//     }
// // };
// Exercise 1 : Giphy API

// fetch('https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
//     .then(response => response.json())
//     .then(data => {
//         return console.log(data)
//     })

// Exercise 2: Giphy API

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

xhr.withCredentials = false;

xhr.responseType = 'json';
// xhr.responseType = 'document';
xhr.send();
xhr.onload = function() {
    if (xhr.status != 200) {

        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
        let data = xhr.response.data
        console.log(data);
    }
};




// In your js file, create your functions:
//     to retrieve the elements from the DOM.
// to get the data from the API(star wars characters).
// to display the info on the DOM.