var express = require('express');
var router = express.Router();

/* GET home page. */
router.get( '/', (req, res, next) => res.send('hello') );

router.get( '/batata', (req, res, next) =>{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.json({
    'batata': 'batata'
  }) ;
});

module.exports = router;
