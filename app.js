var path = require('path');

//meus
let express = require('express');
let http = require('http').Server(app);
let io = require('socket.io')(http);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gameRouter = require('./routes/game');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/game', gameRouter);

io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('message', (message) => {
    console.log("Message Received: " + message);
    io.emit('message', {type:'new-message', text: message});    
  });
});

http.listen(4000, () => {
  console.log('started on port 4000');
});

module.exports = app;
