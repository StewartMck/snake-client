const net = require('net');
const {IP, PORT, ENCODING} = require('./constants');

const connect = () => {

  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.setEncoding(ENCODING);

  conn.on('connect', () => {
    console.log('Connected to SERVER');
    conn.write(`Name: ${process.argv[2]}`);
  });

  conn.on('data', (data) => {
    console.log('SERVER: ', data);
  });

  return conn;
};

module.exports = connect;