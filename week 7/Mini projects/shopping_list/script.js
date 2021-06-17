const root = document.querySelector('#root')
console.log(root);



const showData = async() => {
    try {
        let data = await fetch('http://localhost:5000/getItems')
        let result = await data.json()
        return createData(result);
    } catch (err) {
        console.log(err)
    }


}

const createData = (allData) => {
    let root = document.getElementById('root');
    root.innerHTML = '';
    allData.forEach(item => {
        let div = document.createElement('div');
        div.innerHTML += `<h3> item: ${item.item} amount: ${amount.value} </h3>`
        root.appendChild(div)
    })
}