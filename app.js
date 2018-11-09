
let express = require('express');
let http = require('http').Server(app);
let io = require('socket.io')(http);

var app = express();

var indexRouter = require('./routes/game');

var gameController = require('./controllers/game.controller');

app.use('/', indexRouter);

http.listen(4000, () => console.log('started on port 4000'));

// socket.io

app.listen(3000, () => console.log('started on port 3000'));

io.sockets.on('connection', socket => {
  gameController.game(socket, io);
});

module.exports = app;
