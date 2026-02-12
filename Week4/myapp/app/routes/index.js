var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express', 
    name:"Solana Garfunkel" , 
    image:"images/bwhouse.jpg"});
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express POST Request' });
});

module.exports = router;
