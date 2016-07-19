//本js是本地读取images，然后可以用浏览器打开

var http = require('http')
var fs = require('fs')
var request = require('request')

http.createServer(function(req, res){
/*    fs.readFile('bigPic.jpg', function(err, data){
        if(err){
            res.end('file not exist!')
        }else{
            res.writeHeader(200, {'Context-Type':'text/html'})
            res.end(data);
        }
    })

    fs.createReadStream('bigPic.jpg').pipe(res);*/

    request('http://static.youku.com/youku/dist/img/find/yk-logo-0412.png').pipe(res)


}).listen(2222);

