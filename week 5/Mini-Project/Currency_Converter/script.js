const access_key = '075d15d60a95b06528ad8d5812e3d35e';
const list_url = `http://www.apilayer.net/api/list?access_key=${access_key}`
const rate_url = `http://www.apilayer.net/api/live?access_key=${access_key}&format=1`
const root = document.querySelector('#root');
// const selectCou = document.querySelector('#selectCou');

console.log(root);
// https: //api.currencylayer.com/live

const listData = async() => {

    try {
        const res = await fetch(list_url)
        const data = await res.json()
            //         console.log(data);
        return data

    } catch (err) { console.log(err, 'err at getData function'); }
}

const ratData = async() => {

    try {
        const res = await fetch(rate_url)
        const data = await res.json()
        console.log(data);
        return data

    } catch (err) { console.log(err, 'err at getData function'); }
}

const getData = async() => {

    try {
        const selectCou = document.querySelector('#selectCou');
        const selectTo = document.querySelector('#selectTo');

        const rate = await ratData()

        for (const [key, value] of Object.entries(rate.quotes)) {
            let dom = document.createElement('option')
            dom.innerHTML = `<div>${key}:${value}</div>`
            selectTo.appendChild(dom)
        }

        const list = await listData()
        let show = Object.values(list.currencies)

        show.forEach(el => {
            let dom = document.createElement('option')
            dom.innerHTML = `<div>${el}</div>`
            selectCou.appendChild(dom)

        })

    } catch (err) { console.log(err, 'err at showData function'); }
}