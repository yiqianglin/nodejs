var fs = require('fs');

//创建一个只读的流
var readStream = fs.createReadStream('../http.js');
var n = 0;
readStream
    .on('data', function(chunk){
        console.log('data emits')
        n++;
        console.log(n)
        console.log(Buffer.isBuffer(chunk))
        //console.log(chunk.toString('utf-8'))
        readStream.pause();     //暂停流，然后定时器开启，模拟异步操作
        console.log('流暂停');
        setTimeout(function(){
            console.log('恢复流');
            readStream.resume();
        },3000)

    })
    .on('readable', function(){
        console.log('data readable')
    })
    .on('end', function(){
        console.log(n);
        console.log('data end')
    })
    .on('close', function(){
        console.log('readStream closed')
    })
    .on('error', function(e){
        console.log(e)
    })


    


