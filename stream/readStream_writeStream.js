var fs = require('fs');

var readStream = fs.createReadStream('bigPic.jpg');
var writeStream = fs.createWriteStream('bigPic_copy.jpg');

readStream.on('data', function(chunk){
    if(writeStream.write(chunk) == false){
        console.log('数据还在缓存区');
        readStream.pause();
    }
});

readStream.on('end', function(){
    writeStream.end();
})

writeStream.on('drain', function(){      //当writeStream已经将chunk消化后触发
    console.log('readStream已经写入块');
    readStream.resume();
})


