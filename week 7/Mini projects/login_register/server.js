const express = require('express')
const bp = require('body-parser')
const fs = require('fs');
const cors = require('cors');
const Client = require('pg').Client
const app = express()


app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.use(cors());


const registerAndLogin = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'password369',
    client: 'pg',
    database: 'node_daily'
})



app.route('/register')
    .get((req, res) => {
        res.send('get in register')
    })

.post((req, res) => {
    console.log('post...in register')
    console.log(req.body);

})


app.route('/login')
    .get((req, res) => {
        res.send('get in login')
    })


app.post('/', function(req, res) {
    console.log('post...in register')
    console.log(req.body)
    sendRegisterDataToDb()
})


app.listen(3000)


const sendRegisterDataToDb = async(data) => {
    try {
        await registerAndLogin.connect()
        console.log('connect')
        await registerAndLogin.query(`insert into register values ($1, $2, $3, $4, $5, $6)`, [0, data.fname, data.lname, data.email, data.username, data.password])
        const result = await registerAndLogin.query('SELECT * FROM  users')
        console.table(result.rows)
    } catch (err) { err, 'at sendRegisterDataToDb' }


    finally {
        await registerAndLogin.end()
    }
}