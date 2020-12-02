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

  conn.on('data', (data) => {
    console.log('SERVER: ', data);
  });

  return conn;
};

module.exports = connect;