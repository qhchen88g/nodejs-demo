const fs = require('fs');
module.exports = {
    writeFileSync(path, data) {
        fs.writeFileSync(path, data);
        console.log('同步写文件完成');
    },
    writeFile(path, data, callback) {
        fs.writeFile(path, data, function(err){
            if(err){
                throw err;
            }
            console.log('异步写文件完成');
            callback(data);
        })
    },
    readImg(path, res) {
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        fs.readFile(path, 'binary', function(err, file){
            if(err){
                console.log(err);
                return false;
            }else{
                console.log('输出文件');
                res.write(file, 'binary');
                res.end('');
            }
        });
    }
}