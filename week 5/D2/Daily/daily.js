let xhr = new XMLHttpRequest();

function fetchData() {
    let search = document.getElementById('search').value;
    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)

    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = function() {
        createImages(xhr.response.data);
    }
};

function createImages(arr) {
    let root = document.getElementById('root');
    root.innerHTML = " ";

    arr.forEach((item, i) => {
        let img = document.createElement('img')
        img.setAttribute('src', item.images.fixed_height_small.url)
        root.appendChild(img)
    });
}

function deleteAll() {
    let root = document.getElementById('root');
    root.innerHTML = " ";
}