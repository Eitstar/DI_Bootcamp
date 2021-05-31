//Exercise 3


const app = express();




app.get('/1234', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify.showData());
});


app.listen(3300, () => console.log('server  listening on port 3300!'));














//Exercise 2 : Express & Parameters

// const express = require('express');
// const app = express();




// app.get('/1234', (req, res) => {
//     res.setHeader("Content-Type", "application/json");
//     res.writeHead(200);
//     res.end(JSON.stringify(user));
// });


// app.listen(3300, () => console.log('server  listening on port 3300!'));


// const user = {
//     id: '1234',

// }

// console.log(user)















//Exercise 1 : Express & JSON

// const express = require('express');
// const app = express();

// const user = {
//     firstname: 'John',
//     lastname: 'Doe'
// }


// app.get('/', (req, res) => {
//     res.setHeader("Content-Type", "application/json");
//     res.writeHead(200);
//     res.end(JSON.stringify(user));
// });


// app.listen(3105, () => console.log('server  listening on port 3105!'));


// app.get('/', (req, res) => {
//     console.log("-----In the Head Page-----");
//     res.send('the Head Page');
// });


// app.get('/home', (req, res) => {
//     console.log("-----In the Home Page-----");
//     res.send('In the Home Page');
// });

// app.get('/about', (req, res) => {
//     console.log("-----In the About Page-----");
//     res.send('the about');

// });