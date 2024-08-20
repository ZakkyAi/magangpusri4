const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',     // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'drawing_app'    // Replace with your database name
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// API route to save shapes
app.post('/api/shapes', (req, res) => {
  const { user_id, name, data } = req.body;
  const query = 'INSERT INTO drawings (user_id, name, data) VALUES (?, ?, ?)';
  db.query(query, [user_id, name, JSON.stringify(data)], (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ message: 'Drawing saved successfully', drawingId: result.insertId });
    }
  });
});

// API route to get the latest drawing
app.get('/api/shapes', (req, res) => {
  const query = 'SELECT * FROM drawings ORDER BY id DESC LIMIT 1';
  db.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ shapes: JSON.parse(result[0].data) });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
