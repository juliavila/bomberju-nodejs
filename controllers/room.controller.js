let rooms = [];
let maxPlayer = 2;

findRoom = () => {
  let room = rooms.find(room => room.totalPlayers < maxPlayer);
  return room;
},

createRoom = () => {
  let room = {
    id: generateId(),
    totalPlayers: 1
  }
  rooms.push(room);
  return room;
},

generateId = () => `${Date.now()}${Math.floor(Math.random() * Math.floor(1000))}`

module.exports.enterRoom = () => {

  let room = findRoom();
  
  if (room) room.totalPlayers++;
  else room = createRoom();

  return room;

}
