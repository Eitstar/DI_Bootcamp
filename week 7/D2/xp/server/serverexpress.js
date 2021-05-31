const express = require('express');
const app = express();

// app.use((req, res, next) => {
//     console.log("Hello Middleware");
//     next();
// });
app.get('/', (req, res) => {
    console.log("-----In the Head Page-----");
    res.send('the Head Page');
});


app.get('/home', (req, res) => {
    console.log("-----In the Home Page-----");
    res.send('In the Home Page');
});

app.get('/about', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h1>This is my 1st res </h1><h1> This is my 2st res</h1><h3>this is my 3r res</h3></body></html>');
    res.end();
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));


// const exp = require('express');
// const app = exp();
// app.use('/', exp.static(__dirname + '/public'))
// app.get('/login', (req, res) => {
//     console.log(req.query.username, req.query.password);
//     res.send('login get')
// })
// app.listen(3000);