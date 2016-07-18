var fs = require('fs')

fs.createReadStream('bigPic.jpg').pipe(fs.createWriteStream('pipe_toCopy.jpg'))