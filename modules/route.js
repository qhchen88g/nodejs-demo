const fs = require('fs');
const optFile = require('./optfile');
const querystring = require('querystring');
module.exports = {
    normal(res) {
        const data = fs.readFileSync('./views/404.html');
        res.write(data);
        res.end('');
    },
    loginSync(res) {
        const data = fs.readFileSync('./views/login.html');
        res.write(data);
        res.end('');
    },
    regSync(res) {
        const data = fs.readFileSync('./views/reg.html');
        res.write(data);
        res.end('');
    },
    login(req, res) {
        var post = '';
        req.on('data', function (chunk) {
            post += chunk;
        });

        req.on('end', function () {
            post = querystring.parse(post);
            arr = ['email', 'pwd'];

            function recall(err, data) {
                let dataStr = data.toString();

                for (var i = 0; i < arr.length; i++) {
                    console.log(post[arr[i]]);
                    // let re = new RegExp('{'+arr[i] + '}', 'g');
                        re = new RegExp('{'+arr[i]+'}','g'); // /\{name\}/g
                    dataStr.replace(/email/, post[arr[i]]);
                    console.log(/email/.test(dataStr));
                }
                res.write(dataStr);
                res.end('');
            }
            fs.readFile('./views/login.html', recall);
        });



    },
    reg(res) {
        fs.readFile('./views/reg.html', function (err, data) {
            if (err) {
                console.log(err);
            } else {
                res.write(data);
                res.end('');
            }
        });
    },
    writeFileSync(res) {
        optFile.writeFileSync('a.txt', '这是一个同步写的页面');
        res.write('同步写文件完成');
        res.end('');
    },
    writeFile(res) {
        function callback(data) {
            res.write(data);
            res.end('');
        }
        optFile.writeFile('b.txt', '这是异步写的页面', callback)
    },
    readImg(path, res) {
        optFile.readImg('./imgs/123.jpg', res);
    }
}