var http = require('http');
var my = require('./teszt');

var output = 'Helló!';

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html', 'charset': 'utf-8'});
  res.write(my.kocsik());
  res.end();
}).listen(8080);