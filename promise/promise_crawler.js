var http = require('http');
var Promise = require('bluebird');
var baseUrl = 'http://www.imooc.com/view/';
var url = 'http://www.imooc.com/view/9';
var vedioIds = [9, 10];
var cheerio = require('cheerio');

function filterChapters(html){
    var $ = cheerio.load(html);
    var chapters = $('#main');
    //var courseData = [];            //存放爬虫数据
    var courseData;
    chapters.each(function(item){
        var chapter = $(this);
        var chapterTitle = chapter.find('.hd').find('h2.l').text();
        var desc = chapter.find('.course-info-main').find('.auto-wrap').text();
        var data={
            title : chapterTitle,
            desc : desc
        }
        //courseData.push(data)
        courseData = data;
    });
    return courseData;
};

function printCourseInfo(courseData){
    courseData.forEach(function(item){
        var chapterTitle = item.title;
        var desc = item.desc;
        console.log(chapterTitle + " : " + desc + '\n')
    })
};

function getDeatilsAsync(url){
  return new Promise(function(resolve, reject){
    console.log('正在爬取...');
    http.get(url,function(res){
       var html='';
       res.on('data',function(data){
           html+=data;
       });
       res.on('end',function(){
            resolve(html)
            //var courseData = filterChapters(html);
            //printCourseInfo(courseData)
       })
    }).on('error', function(e){
      reject(e);
      console.log('获取数据失败');
    })
  })
}

var fetchCourseArray = [];
vedioIds.forEach(function(id){  
   fetchCourseArray.push(getDeatilsAsync(baseUrl + id));
})


//模拟数据爬取
Promise
  .all(fetchCourseArray)
  .then(function(pages){    //pages是获取的整个html
    var courseData = [];
    pages.forEach(function(html){
      var courses = filterChapters(html);
      courseData.push(courses)
    });
    console.log(courseData);
    printCourseInfo(courseData)
  })


