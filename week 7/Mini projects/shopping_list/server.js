const express = require('express');
const app = express()
const fs = require('fs')
const bp = require('body-parser');
const cors = require('cors');
app.use(cors());

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use('/static', express.static('public'))


app.route('/shoppingList')
    .get((req, res) => {
        console.log('get')
    })

.post((req, res) => {
    console.log('post...')
    let list = []
    const listJson = fs.readFileSync('./shopping.text')
    let listJsonStrimg = listJson.toString()
    list = JSON.parse(listJsonStrimg)
    list.push(req.body)
    fs.writeFile('./shopping.text', JSON.stringify(list), function(err) {
        if (err) return console.log(err);
    });
})





app.route('/getItems')
    .get((req, res) => {
        console.log('get...')
        let newList = []
        const listJson = fs.readFileSync('./shopping.text')
            // console.log(listJson)
        let listJsonStrimg = listJson.toString()
        newList = JSON.parse(listJsonStrimg)
        console.log(newList)
        res.send(newList)

    })
    .post((req, res) => {

    })

app.listen(5000)