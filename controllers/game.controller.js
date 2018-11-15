var roomController = require('./room.controller');

module.exports.game = (socket, io) => {
	console.log('user connected');

	socket.on('disconnect', () => console.log('user disconnected'));

	socket.on('message', message => {

    if (message.type === 'WIN') 
      roomController.deleteRoom(message.room.roomId)

		io.emit('message', { type: 'new-message', text: message })
  });

  socket.on('ready', () => {
    let rooms = roomController.getRoomsReady();
    console.log(rooms);
    if (rooms) {
      rooms.forEach(room => {
        let message = {
          room: room,
          type: 'START'
        }
        io.emit('message', { type: 'new-message', text: message })
      });
    }
  })
  
}