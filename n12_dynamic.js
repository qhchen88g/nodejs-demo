const http = require('http');
const router = require('./modules/route');
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    router.login(request, response);
}).listen(80);
console.log('server running at 127.0.0.1');