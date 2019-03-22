## nodejs学习笔记
[学习地址](https://study.163.com/course/courseMain.htm?courseId=1003228034&_trace_c_p_k2_=6943b840a6f246daa22ba8fabf613467)   

1. hello, 创建服务   
<code> http.createServer、 response.writeHead、 response.write、 response.end </code>
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

5. 读文件   
- require('fs')   
- fs.readFileSync 、 fs.readFile     

6. 写文件   
- fs.writeFileSync 、 fs.writeFile   

7. 读图片   

8. 路由改造   

9. 捕获异常   

10. 参数接收
- get方式 
  rdata = url.parse(req.url,true).query // 返回参数json对象   

- post方式（参数异步返回）  
```js
  var post = ''; //暂存请求体信息
  req.on('data', function(chunk){   //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中      
      post += chunk;
  });
  req.on('end', function(){   //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。    
    post = querystring.parse(post);
    console.log('email:'+post['email']+'\n');        
  });

11. 正则表达式

12. 动态网页









