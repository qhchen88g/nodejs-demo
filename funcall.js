const http = require('http');
const otherFuns = require('./modules/fun2.js');
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if(request.url !== '/favicon.ico'){
        const funName = 'fun2';
        otherFuns[funName](response);
        response.end('');
    }
}).listen(80);