var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    'content': '我是来自nodejs的评论',
    'mid':8837
})

var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/docomment',
    method: 'POST',
    headers: {
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'imooc_uuid=3cdac88e-62e2-4acb-aba4-9b58a5535918; imooc_isnew=1; imooc_isnew_ct=1468125212; PHPSESSID=mkm9o87k0gkbe39ddgrv3es8j0; loginstate=1; apsid=QxNTQwZTE3YzAzM2Y0MzMwNWU2YmEzODk5OTU1OTkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTk2NTM4MwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NDEwNjUwNTVAcXEuY29tAAAAAAAAAAAAAAAAAAAAADE5MjhkZmFhMDMzN2M3ZmU4NDQ0M2Y2YWIyYTc1ZmJjutCBV7rQgVc%3DZj; last_login_username=441065055%40qq.com; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1468125231,1468125281; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1468125640; cvde=5781d056d9eb6-12',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Referer':'http://www.imooc.com/video/8837',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.109 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
};

var req = http.request(options, function(res){      //得到http返回结果
    console.log('Status:' + res.statusCode);
    console.log('result:' + res.result);    //这个为什么是undefined？明明返回的对象是{result:0,data:{*****}}
    console.log('headers:' + JSON.stringify(res.headers));
    res.on('data', function(chunk){         //注册data事件，返回数据的时候会执行
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk)
    });
    res.on('end', function(){   //网络请求完毕，连接关闭的时候会触发end事件
        console.log('网络关闭')
    });
});
req.on('error',function(e){
    console.log('请求失败：' + e.message);
});
req.write(postData)     //将要请求的数据写入请求体
req.end()       //请求体结束