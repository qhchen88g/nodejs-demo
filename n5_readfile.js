const http = require('http');
const router = require('./modules/route');
const url = require('url');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    if(request.url !== '/favicon.ico'){
        let routeName;
        let pathname = url.parse(request.url).pathname.replace(/\//, '');
        if(pathname && router[pathname]){
            routeName = pathname;
        }else{
            routeName = 'normal';
        }
        router[routeName](response);
    }

}).listen(80);

console.log('server running at 127.0.0.1');