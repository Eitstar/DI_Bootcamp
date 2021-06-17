const root = document.querySelector('#root');


const RandomPhrase = async() => {
    try {
        const userInput = document.querySelector('#userInput').value
        console.log(userInput);
        const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
        const data = await res.json();
        console.log(data.data);
        return data.data;

    } catch (err) { console.log(err, 'at RandomPhrase'); }
}


const dispalyImg = async() => {

    // root.innerHTML = " ";
    try {
        const showImg = await RandomPhrase()
        console.log(showImg);
        showImg.forEach((el, i) => {
            let img = document.createElement('img')
            img.setAttribute('src', `${el.images.fixed_height_small.url}`)
            root.appendChild(img)

        });


    } catch (err) {
        console.log(err, 'at dispalyImg')
    }


}

function deletSel() {
    $(document.querySelector('#root')).remove();

}