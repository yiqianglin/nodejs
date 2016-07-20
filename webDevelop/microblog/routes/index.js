var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'henix index Page' });

  res.append("Time now : "+new Date().toString());
  res.append("Time now+1 : "+Date.now());
  res.end();
});

module.exports = router;
