var fs = require('fs');

fs.readFile('new.jpg', function(error, origin_buffer){
    console.log(Buffer.isBuffer(origin_buffer));

    fs.writeFile('new1.jpg', origin_buffer, function(error){
        if(error)   console.log(error)
    });     //这里创建了一个new1.jpg，将之前的buffer里面的东西写进来

    var base64Image = origin_buffer.toString('base64');
    var base64ImageBuffer = new Buffer(base64Image,'base64');
    fs.writeFile('base64Image.png', base64ImageBuffer, function(error){
        if(error)   console.log(error)
    });      //这里创建了一个以base64编码buffer写成的png文件。

    console.log(Buffer.compare(origin_buffer, base64ImageBuffer))
    //最后判断之前utf-8的buffer和base64的buffer是否一样
})


