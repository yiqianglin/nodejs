(function(){
    setInterval(function(){
    var newTmplVal = document.getElementById('new-tmpl-val').value || null;
    console.log(newTmplVal);
    var newTmpl = document.getElementById('container');
    var tmpl = '<p>value is : ' + newTmplVal + '</p>';
    newTmpl.innerHTML = ejs.render(tmpl);
    },2000)
})()