var express = require('express');
var router = express.Router();
var roomController = require('./../controllers/room.controller');

/* GET home page. */
router.get( '/', (req, res, next) => {});

router.get( '/enterRoom', (req, res, next) => {

  let room = roomController.enterRoom();

  res.json({
    'roomId': room.id,
    'playerIndex': room.totalPlayers
  });    

});

// router.get( '/batata', (req, res, next) =>{
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//   res.json({
//     'batata': 'batata'
//   });
// });

module.exports = router;
