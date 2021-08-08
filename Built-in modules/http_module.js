const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/home') {
        res.end('Welcome To Home Page');
    } else if (req.url === '/about') {
        res.end('About Page');
    } else {
        res.end('No Page Found');
    }
});

server.listen(8000);
