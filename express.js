import express from 'express';
import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const uploadDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
  console.log('Created uploads directory');
}

const app = express();
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));
app.use(express.static('pages'));

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, uploadDir);
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});
const uploadSingle = multer({ storage });

// Routes from express.js
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'home.html'));
});

app.get('/userPage', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'user.html'));
});

app.get('/studentPage', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'student.html'));
});

app.get('/adminPage', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'admin.html'));
});

app.get('/user', (req, res) => {
  const userId = req.query.id;
  const userName = req.query.name;
  if (userId && userName) {
    res.send(`<html><body><h1>User ${userName}'s ID is: ${userId}</h1></body></html>`);
  } else {
    res.status(400).send('User ID and name is required');
  }
});

app.get('/getUser', (req, res) => {
  const response = {
    firstName: req.query.firstName,
    lastName: req.query.lastName,
  };
  console.log("Response is: ", response);
  res.end(`Received Data: ${JSON.stringify(response)}`);
});

app.get('/getStudent', (req, res) => {
  const response = {
    firstName: req.query.firstName,
    lastName: req.query.lastName,
    yearAndSection: req.query.yearAndSection,
  };
  console.log("Response is: ", response);
  res.end(`Received Data: ${JSON.stringify(response)}`);
});

// POST admin form with file upload
app.post('/postAdmin', uploadSingle.single('file'), (req, res) => {
  const response = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    file: req.file ? req.file.originalname : 'No file uploaded',
  };
  console.log("Response is: ", response);
  res.end(`Received Data: ${JSON.stringify(response)}`);
});


const PORT = 5000;

const server = app.listen(PORT);

server.on('listening', () => {
  const addr = server.address();
  if (addr && typeof addr === 'object') {
    console.log(`Server running at http://localhost:${addr.port}`);
  } else {
    console.log("Server is running, but address info not available.");
  }
});

server.on('error', (err) => {
  console.error('Server failed to start:', err.message);
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use.`);
  }
});
