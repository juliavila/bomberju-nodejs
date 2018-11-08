module.exports.game = function (socket, io) {
	console.log('user connected');

	socket.on('disconnect', () => console.log('user disconnected'));

	socket.on('message', message => {
		io.emit('message', { type: 'new-message', text: message })
	});
}
