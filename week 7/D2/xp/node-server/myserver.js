//Exercise 1 : HTTP
//step 1


// const http = require('http');

// console.log('hey Eitan')
// http.createServer(function(request, response) {
//     response.writeHeadr(200, { 'Content-Type': 'text/html' });
//     response.end('Hello World');
// }).listen(3001);

// console.log('Server running at  http://localhost:3001/');

//step 2
// res.write('<html><body><p>Welcome new user</p></body></html>');

const http = require('http');

console.log('hey Eitan')
http.createServer(function(request, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h3>This is my 1st res</h3><h3>This is my 2st res</h3> <p> this is my 3r res</p></body></html>');
    // res.write('<html><body><h3>This is my 2st res</h3></body></html>');

    res.end();
}).listen(3001);

console.log('Server running at  http://localhost:3001/');