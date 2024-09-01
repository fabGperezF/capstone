const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'mydb'
});

connection.connect(err => {
  if (err) {
    console.error('Error conectando a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos como id ' + connection.threadId);
});

module.exports = connection;