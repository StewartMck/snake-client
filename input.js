const { builtinModules } = require("module");
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
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
    connection.write("Move: up");
    break;
  case 'a':
    connection.write("Move: left");
    break;
  case 's':
    connection.write("Move: down");
    break;
  case 'd':
    connection.write("Move: right");
    break;
  case 't':
    connection.write("Say: SNEAKY SNAKE");
    break;
  }
};

module.exports = {
  setupInput,
};