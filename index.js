var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api/get/nodejs-api', function (req, res) {
  res.status(200).json({
    "message" : "hello let's start nodejs-api"
  })
})

router.post('/api/post/nodejs-api', function(req, res) {
  res.status(200).json({
    "message" : "post nodejs-api"
  })
})
module.exports = router;
