var express = require('express');
var app = express();

app.get('/category', function(req, res){
    res.status(200);
    res.json({
        python:20,
        nodejs:45,
        java:20,
        html:20
    })
})

var questionList = [
        {
            id: 1,
            title: '关于Data.now()的问题',
            asker: 'henix',
            course: 'node入门级教程',
            'last-reply': Date.now(),
            reply: 23,
            state: 'resolved'
        },
        {
            id: 2,
            title: 'express4.0改版写法',
            asker: 'henix',
            course: 'express教程',
            'last-reply': Date.now(),
            reply: 1,
            state: 'resolved'
        },
        {
            id: 3,
            title: 'npm安装报错信息',
            asker: 'henix',
            course: 'express教程',
            'last-reply': Date.now(),
            reply: 0,
            state: 'unresolved'
        }
    ];

app.get('/questions', function(req, res){
    res.status(200);
    res.json(questionList)
})
app.get('/questions/all', function(req, res){
    res.status(200);
    res.json(questionList)
})
app.get('/questions/resolved', function(req, res){
    res.status(200);
    res.json(questionList.filter(function(q){
        return q && q.state=='resolved'
    }))
})
app.get('/plainText', function(req, res){
    res.status(200).send('hello i am a text')
})




app.listen(3000)