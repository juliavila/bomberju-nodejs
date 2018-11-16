let rooms = [];
let maxPlayer = 2;

// let eventType = {
//   BOMB = 'BOMB',
//   FIRE = 'FIRE',
//   DESTROY_BOX = 'DESTROY_BOX',
//   PLAYER = 'PLAYER',
//   WIN = 'WIN',
//   START = 'START'
// }

findFreeRoom = () => {
  let room = rooms.find(room => room.totalPlayers < maxPlayer);
  return room;
},

createRoom = () => {
  let room = {
    id: generateId(),
    totalPlayers: 1,
    start: false
  }
  rooms.push(room);
  return room;
},

generateId = () => `${Date.now()}${Math.floor(Math.random() * Math.floor(1000))}`

module.exports.enterRoom = () => {

  let room = findFreeRoom();
  
  if (room) room.totalPlayers++;
  else room = createRoom();

  room.start = room.totalPlayers === maxPlayer;

  return room;

}

module.exports.findRoom = (roomId) => {
  let room = rooms.find(room => room.roomId === roomId);
  return room;
}

module.exports.roomIsReady = (roomId) => {
  let room = module.exports.findRoom(roomId);
  return room && room.totalPlayers === maxPlayer;
}

module.exports.getReadyRooms = () => {
  return rooms.filter(room => {
    let ready = room.totalPlayers === maxPlayer && room.start;
    room.start = false;
    return ready;
  })
}

module.exports.deleteRoom = (roomId) => {
  rooms = rooms.filter(room => room.roomId !== roomId);
}
