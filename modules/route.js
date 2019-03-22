const fs = require('fs');
const optFile = require('./optfile');
module.exports = {
    normal(res){
        const data = fs.readFileSync('./views/404.html');
        res.write(data);
        res.end('');
    },
    loginSync(res){
        const data = fs.readFileSync('./views/login.html');
        res.write(data);
        res.end('');
    },
    regSync(res){
        const data = fs.readFileSync('./views/reg.html');
        res.write(data);
        res.end('');
    },
    login(res){
        fs.readFile('./views/login.html', function(err, data){
            if(err){
                console.log(err);
            }else{
                res.write(data);
                res.end('');
            }
        });
    },
    reg(res){
        fs.readFile('./views/reg.html', function(err, data){
            if(err){
                console.log(err);
            }else{
                res.write(data);
                res.end('');
            }
        });
    },
    writeFileSync(res){
        optFile.writeFileSync('a.txt', '这是一个同步写的页面');
        res.write('同步写文件完成');
        res.end('');
    },
    writeFile(res) {
        function callback(data){
            res.write(data);
            res.end('');
        }
        optFile.writeFile('b.txt', '这是异步写的页面', callback)
    },
    readImg(path,res) {
        optFile.readImg(path, res);
    }
}