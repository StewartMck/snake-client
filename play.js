const net = require('net');

const connect = () => {

  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8');

  conn.on('data', (data)=>{
    console.log('SERVER: ', data);
  });

  return conn;
};

console.log('Connecting...');
connect();

