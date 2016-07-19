var fs = require('fs');
fs.readFile('../stream/bigPic.jpg', 'base64' ,function(err, data){
    if(err){
        console.error(err)
    }else{
        console.log(data)
    }
});