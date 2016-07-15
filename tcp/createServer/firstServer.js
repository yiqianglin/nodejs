var net = require('net');

var server = net.createServer((socket) => {
    socket
        .on('data', (data) => {
            //socket.writeHead(200,{})
            socket.write('你好');
        })
        .on('end', () => {
            console.log('连接断开')
        });
        socket.write('欢迎光临《深入浅出Nodejs》')

});
server.listen(2001, () => {
    console.log('server is listened')
})