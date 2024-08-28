const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // To handle CORS issues

const app = express();
const port = 3000;

// MySQL connection setup
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'drawing_app'
});

// Connect to MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Middleware
app.use(cors()); // Allow cross-origin requests

// Endpoint to get all databases
app.get('/api/databases', (req, res) => {
  connection.query('SHOW DATABASES', (err, results) => {
    if (err) {
      res.status(500).send('Error fetching databases');
    } else {
      res.json(results);
    }
  });
});

// Endpoint to get all tables in the drawing_app database
app.get('/api/tables', (req, res) => {
  connection.query('SHOW TABLES', (err, results) => {
    if (err) {
      res.status(500).send('Error fetching tables');
    } else {
      res.json(results);
    }
  });
});

// Endpoint to get columns of a specific table
app.get('/api/table-columns/:tableName', (req, res) => {
  const tableName = req.params.tableName;
  connection.query(`DESCRIBE ${tableName}`, (err, results) => {
    if (err) {
      res.status(500).send('Error fetching table columns');
    } else {
      res.json(results);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
