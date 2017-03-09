
http = require('http');
url = require('url');

var host = '127.0.0.1';
var port = 12345;

var xml = '<root><name>KerKer</name></root>';

var server = http.createServer(
    function(req,res) {
        var pathname = url.parse(req.url).pathname;
         
        if(pathname === '/') {
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end('^_^ ~');
        } else if(pathname === '/aboutme/') {
            res.writeHead(200,{'Content-Type':'text/xml'});
            res.end(xml);
        }
    }
); 

server.listen(port);
console.log('Server running at http://' + host + ':' + port);