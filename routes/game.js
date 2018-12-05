var express = require('express');
var router = express.Router();
var roomController = require('./../controllers/room.controller');

/* GET home page. */
router.get( '/', (req, res, next) => {});

router.get( '/enterRoom', (req, res, next) => {
  
  let room = roomController.enterRoom();
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({
    'roomId': room.id,
    'playerId': room.totalPlayers
  });    

});

module.exports = router;
