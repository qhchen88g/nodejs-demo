const http = require('http');
const router = require('./modules/route');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'image/jpeg'});
    if(request.url !== 'favicon.ico'){
        router.readImg('./imgs/123.jpg', response);
        
    }
}).listen(80);
console.log('server running at 127.0.0.1');
