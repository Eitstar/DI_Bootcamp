const root = document.querySelector('#root');
// console.log(root);


const RandomPhrase = async() => {
    const random = Math.floor(Math.random() * 9) + 1;
    try {
        const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${random}&rating=g&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
        const data = await res.json();
        console.log(data.data);
        return data.data;

    } catch (err) { console.log(err, 'at RandomPhrase'); }
}


const dispalyImg = async() => {
    root.innerHTML = " ";
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



// const dispalyImg = async() => {

//     try {
//         const showImg = await RandomPhrase()
//         console.log(showImg);
//         const showImg newObj = document.createElement('DIV').innerHTML = `<img src="${[0].images.fixed_width_small.url}" alt=""> `;
//         root.appendChild(newObj)
//     } catch (err) {
//         console.log(err, 'at dispalyImg')
//     }


// }