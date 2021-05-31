const http = require('http');

const server = http.createServer((req, res) => {


    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(user));

});
server.listen(8080);
console.log('Server running at http://127.0.0.1:8080');

console.log('4:10')
const user = {
    firstname: 'John',
    lastname: 'Doe'
}


console.log(user)
















// const http = require('http');

// const server = http.createServer((req, res) => {

//     if (req.url == '/welcome') {
//         res.setHeader("Content-Type", "application/json");
//         res.writeHead(200);
//         res.end(JSON.stringify({ message: "Welcome New User" }));
//     } else {
//         res.end("Another page");
//     }
// });
// server.listen(8080);
// console.log('Server running at http://127.0.0.1:8080');

// console.log('4:10')
//     const user = {
//         firstname: 'John',
//         lastname: 'Doe'
//     }