let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

xhr.withCredentials = false;

xhr.responseType = 'json';

xhr.send();
xhr.onload = function() {
    if (xhr.status != 200) {

        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
        let data = xhr.response.data
        console.log(data);
    }
};


// retrieve = (() => {


// })


// function loadXml(document) {
//     var cd = document.getElementsByClassName("text");
//     for (let i = 0; i < cd.length; i++) {
//         console.log(cd[i].getElementsByTagName("to")[0].childNodes[0].nodeValue);
//         console.log(cd[i].getElementsByTagName("from")[0].childNodes[0].nodeValue);
//     }
// }


// In your js file, create your functions:
//     to retrieve the elements from the DOM.
// to get the data from the API(star wars characters).
// to display the info on the DOM.