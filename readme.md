## nodejs学习笔记
[学习地址](https://study.163.com/course/courseMain.htm?courseId=1003228034&_trace_c_p_k2_=6943b840a6f246daa22ba8fabf613467)   

1. hello, 创建服务   
<code> http.createServer、 response.writeHead、 response.write、 response.end 
```js
const http = require('http');
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if(request.url !== 'favicon.ico'){ // 防止二次访问
        console.log('访问');
        response.write('hello');
        response.end('');
    }
}).listen(8000);
console.log('server running at 127.0.0.1:8000');
```

2. 调用函数   
参考例子funcall.js   
module.exports输出外部函数   

3. 调用模块 类继承   

4. 路由   





