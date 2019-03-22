const http = require('http');
const url = require('url');
const router = require('./modules/route');
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if(request.url !== 'favicon.ico'){
        const pathname = url.parse(request.url).pathname.replace(/\//, '');
        let routerName;
        if(pathname && router[pathname]){
            routerName = pathname;
        }else{
            routerName = 'normal';
        }
        router[routerName](response);
    }
}).listen(80);

console.log('server running at 127.0.0.1');