let rooms = [];

findRoom = () => {
  let room = rooms.find(room => !room.full);
  if (room) room.full = true;
  return room;
},

createRoom = () => {
  let room = {
    id: generateId(),
    full: false
  }
  rooms.push(room);
  return room;
},

generateId = () => `${Date.now()}${Math.floor(Math.random() * Math.floor(1000))}`

module.exports.enterRoom = () => {

  let room = findRoom();
  console.log(room)
  if (!room) room = createRoom();

  if (room.full) {
    // TODO: send message
  }

  return room;

}
