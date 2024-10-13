const http = require('http');

const server = http.createServer((req, res) =>{
    res.write('Welcome to My Home Page');
    res.end();
})

server.listen(5000);