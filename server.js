const http = require('http');
const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Yashbhavi@5380',
  database: 'student'
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed: ', err);
    return;
  }
  console.log('Connected to the database');
});

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Handle the HTTP requests here
  // ...
});

const port = 3006; // Set your desired port number
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


