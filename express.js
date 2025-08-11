<<<<<<< HEAD
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Static folders
app.use(express.static('public'));
app.use(express.static('pages'));

// Page Routes
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

// User query route
app.get('/user', (req, res) => {
  const userId = req.query.id;
  const userName = req.query.name;
  if (userId && userName) {
    res.send(`<html><body><h1>User ${userName}'s ID is: ${userId}</h1></body></html>`);
  } else {
    res.status(400).send('User ID and name is required');
  }
});

// API Routes
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

app.get('/getAdmin', (req, res) => {
  const response = {
    firstName: req.query.firstName,
    lastName: req.query.lastName,
  };
  console.log("Response is: ", response);
  res.end(`Received Data: ${JSON.stringify(response)}`);
});

// Start Server
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
=======
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Static folders
app.use(express.static('public'));
app.use(express.static('pages'));

// Page Routes
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

// User query route
app.get('/user', (req, res) => {
  const userId = req.query.id;
  const userName = req.query.name;
  if (userId && userName) {
    res.send(`<html><body><h1>User ${userName}'s ID is: ${userId}</h1></body></html>`);
  } else {
    res.status(400).send('User ID and name is required');
  }
});

// API Routes
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

app.get('/getAdmin', (req, res) => {
  const response = {
    firstName: req.query.firstName,
    lastName: req.query.lastName,
  };
  console.log("Response is: ", response);
  res.end(`Received Data: ${JSON.stringify(response)}`);
});

// Start Server
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
>>>>>>> ba27f419cbc9f8e6cacee8b90bac0535392cac6c
