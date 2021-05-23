// part I


// const main = require('./main.js');
// const b = 5;

// console.log(main.mainNum + b)


// console.log(b)
// console.log(largeNumber)

//part II

// const http = require('http');

// const requestListener = function(req, res) {
//     res.writeHead(200);
//     res.end(`Hi there at the frontend `);

// }

// const server = http.createServer(requestListener);
// server.listen(3000);

// console.log('i am listener.....')



// Part III:


const main = require('./main.js');
const http = require('http');

const requestListener = function(req, res) {
    res.writeHead(200);
    res.end(main.currentDate());

}

const server = http.createServer(requestListener);
server.listen(8080);