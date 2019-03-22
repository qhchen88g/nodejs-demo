const http = require('http');
const url = require('url');
const router = require('./modules/route');
let routeName = 'normal';
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if(request.url !== '/favicon.ico'){
        let pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//, '');
        if(pathname && router[pathname]){
            routeName = pathname;
        }
        console.log(pathname);
        // response.write('nn');
        router[routeName](response);
        response.end('');
    }
}).listen(80);
console.log('server running at 127.0.0.1:80');