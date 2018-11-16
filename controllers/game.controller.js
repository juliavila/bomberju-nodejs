var roomController = require('./room.controller');

module.exports.game = (socket, io) => {
	console.log('user connected');

	socket.on('disconnect', () => console.log('user disconnected'));

	socket.on('message', message => {

    console.log(message)
    data = JSON.parse(message);
    
    if (data.type === 'READY') {
      console.log('is ready')
      let rooms = roomController.getReadyRooms();
      console.log(rooms);
      if (rooms) {
        rooms.forEach(room => {
          let newMessage = JSON.stringify({
            room: room,
            type: 'START'
          });
          console.log('newMessage', newMessage);
          io.emit('message', { type: 'new-message', text: newMessage })
        });
      }
    } else {

      if (data.type === 'WIN') {
        roomController.deleteRoom(data.room.roomId)
      }
      
      io.emit('message', { type: 'new-message', text: message })
    }    
  });
}