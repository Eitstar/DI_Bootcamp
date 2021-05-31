const showData = async() => {
    try {
        let data = await fetch('http://localhost:3000/getItems')
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
        div.innerHTML += `<h3> item: ${item.item} price: ${item.amount} </h3>`
        root.appendChild(div)
    })
}