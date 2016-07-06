var http = require('http');
var url = 'http://coding.imooc.com/';
var cheerio = require('cheerio');

function filterChapters(html){
    var $ = cheerio.load(html);
    var chapters = $('.bottom');
    var courseData = [];            //存放爬虫数据
    chapters.each(function(item){
        var chapter = $(this);
        var chapterTitle = chapter.find('h2').text();
        var desc = chapter.find('.desc').text();
        var data={
            title : chapterTitle,
            desc : desc
        }
        courseData.push(data)
    });
    return courseData;
};

function printCourseInfo(courseData){
    courseData.forEach(function(item){
        var chapterTitle = item.title;
        var desc = item.desc;
        console.log(chapterTitle + " : " + desc + '\n')
    })
}

http.get(url,function(res){
   var html='';
   res.on('data',function(data){
       html+=data;
   });
   res.on('end',function(){
        var courseData = filterChapters(html);
        printCourseInfo(courseData)
   })

})
