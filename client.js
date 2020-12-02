const net = require('net');

const connect = () => {

  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Connected to SERVER');
    conn.write("Name: SM");
  });

  conn.on('connect', () => {
    setupInput();
  });

  conn.on('data', (data) => {
    console.log('SERVER: ', data);
  });

  return conn;
};

const setupInput = () => {
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
};

module.exports = connect;