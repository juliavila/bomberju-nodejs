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

findRoom = () => {
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

  let room = findRoom();
  
  if (room) room.totalPlayers++;
  else room = createRoom();

  room.start = room.totalPlayers === maxPlayer;

  return room;

}

module.exports.getRoomsReady = () => {
  return rooms.find(room => {
    let start = room.start
    room.start = false;
    return start;
  });
}

module.exports.deleteRoom = (roomId) => {
  rooms = rooms.filter(room => room.roomId !== roomId);
}
