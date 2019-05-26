const http = require('http');
var my = require('./teszt');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html lang="hu"><head> <meta charset="UTF-8"></head><body>');
    res.write(my.kocsik());
    res.write('</body></html>');
    res.end();
});

server.listen(8080);