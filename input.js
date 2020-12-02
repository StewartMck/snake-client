
const { ENCODING, MOVE_UP_KEY, MOVE_DOWN_KEY,
  MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MESSAGES } = require("./constants");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding(ENCODING);
  stdin.resume();
  stdin.on("data", (data) => {
    handleUserInput(data);
    return stdin;
  });
};

const handleUserInput = (data) => {
  if (data === '\u0003')
    process.exit();

  switch (data) {
  case 'w':
    connection.write(MOVE_UP_KEY);
    break;
  case 'a':
    connection.write(MOVE_LEFT_KEY);
    break;
  case 's':
    connection.write(MOVE_DOWN_KEY);
    break;
  case 'd':
    connection.write(MOVE_RIGHT_KEY);
    break;
  default:
    if (MESSAGES[data]) {
      connection.write(`Say: ${MESSAGES[data]}`);
    }
  }
};

module.exports = {
  setupInput,
};