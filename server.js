var http = require('http');
http.createServer(function(req, res){
    return res.end('Server Running.');
}).listen(8081);
console.log('Server started!')