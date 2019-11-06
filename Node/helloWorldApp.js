//Samuel Miles
//11/6/2019

//Getting Started with Node.js (WIP):

//
//Basic "Hello World" Webpage implementation to help start learning Node.js
//

const http = require('http');       //Assuming a webpage, "http" is required
const hostname = '127.0.0.1';       //Equivalent to "localhost" (In a production scenario, this would be the static IP for the page?)
const port = 3000;                  //Can be any network port

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});

/**********************************************************************/
/*****Pressing the "Control" + "C" Keys will terminate the Server******/
/**********************************************************************/