const express = require('express');
const mysql2 = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/images', express.static('public/images'));

// Create a MySQL connection
const db = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'travel'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});


app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error('Error inserting user into database:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.status(201).json({ message: 'User created successfully' });
  });
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    if (results.length > 0) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid username or password' });
    }
  });
});



// app.post('/api/bookings', (req, res) => {
//   const { fullName, phone, date, numGuests } = req.body;
//   const booking = {
//     fullName,
//     phone,
//     date,
//     numGuests,
//   };
//   const query = 'INSERT INTO bookings SET ?';
//   db.query(query, booking, (err, result) => {
//     if (err) {
//       console.error('Error inserting booking:', err);
//       res.status(500).json({ error: 'Failed to book tour.' });
//     } else {
//       console.log('Booking inserted successfully!');
//       res.status(201).json({ message: 'Booking successful!' });
//     }
//   });
// });







app.post('/api/bookings', (req, res) => {
  const { fullName, phone, date, numGuests } = req.body;
  const booking = {
    fullName,
    phone,
    date,
    numGuests,
  };
  const query = 'INSERT INTO bookings SET ?';
  db.query(query, booking, (err, result) => {
    if (err) {
      console.error('Error inserting booking:', err);
      res.status(500).json({ error: 'Failed to book tour.' });
    } else {
      console.log('Booking inserted successfully!');
      res.status(201).json({ message: 'Booking successful!' });
    }
  });
});


app.get('/packages', (req, res) => {
  const query = 'SELECT * FROM packagess';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching packages:', err);
      res.status(500).send('Error fetching packages');
    } else {
      res.json(results);
    }
  });
});

// app.get('/packages/:id', (req, res) => {
//   const { id } = req.params;
//   const query = 'SELECT * FROM packages WHERE id = ?';
//   db.query(query, [id], (err, results) => {
//     if (err) {
//       console.error('Error fetching package:', err);
//       res.status(500).send('Error fetching package');
//     } else if (results.length === 0) {
//       res.status(404).send('Package not found');
//     } else {
//       res.json(results[0]);
//     }
//   });
// });





// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
