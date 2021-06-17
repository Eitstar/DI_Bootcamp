const exp = require('express');
const bp = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const Client = require('pg').Client
const app = exp()

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(cors());

const registerAndLogin = new Client({
    user: 'postgres',
    password: 'password369',
    host: 'localhost',
    client: 'pg',
    database: 'node_daily'
});

app.route('/register')
    .get((res, req) => {
        console.log('get...in register')

    })

// .post((res, req) => {
//     console.log('post...in register')
//     console.log('req.body')
//     sendRegisterDataToDb('req.body')

// })


app.listen(5500)


const sendRegisterDataToDb = async(data) => {
    try {
        await registerAndLogin.connect()
        console.log('connect')
        await registerAndLogin.query(`insert into  Register values ($1, $2, $3, $4, $5)`, [0, data.firstName, data.lastName, data.email, data.username, data.password])
        const result = await registerAndLogin.query('SELECT * FROM  users')
        console.table(result.rows)
    } catch (err) { err, 'at sendRegisterDataToDb' }


    finally {
        await registerAndLogin.end()
    }
}









// app.use('/static', express.static('public'))

// const path = require('path');

// let directories = path.dirname('/Login_Register/register');
// console.log(directories);