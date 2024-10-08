// A small http server

const http = require('http');

const port  = 1245;
const host = 'localhost';

const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!')
});

app.listen(port, host, () => {
    console.log('Server running on http://${host}:${port}/');
});

module.exports = app;