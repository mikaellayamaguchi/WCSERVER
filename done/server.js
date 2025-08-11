<<<<<<< HEAD
import http from 'http';
import EventEmitter from 'events';

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Request handler function
const requestHandler = (req, res) => {
  if (req.url === '/') {
    // Emit homepage event and pass request and response objects
    eventEmitter.emit('HomePageEvent', res);
  } else {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.write('page not found');
    res.end();
  }
}

// load the homepage
eventEmitter.on('HomePageEvent', (res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  res.write('<html><body><h1>Homepage</h1></body></html>');
  res.end();
});

eventEmitter.on('HomePageEvent', (res) => {
    // asynchronously log that homepage is loaded
  console.log("Homepage loaded");
});

eventEmitter.on('HomePageEvent', (req) => {
    // asynchronously log ip add
  console.log('Visited homepage from IP:', req.socket.remoteAddress);
});

// Create and start server
var server = http.createServer(requestHandler);

server.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
=======
import http from 'http';
import EventEmitter from 'events';

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Request handler function
const requestHandler = (req, res) => {
  if (req.url === '/') {
    // Emit homepage event and pass request and response objects
    eventEmitter.emit('HomePageEvent', res);
  } else {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.write('page not found');
    res.end();
  }
}

// load the homepage
eventEmitter.on('HomePageEvent', (res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  res.write('<html><body><h1>Homepage</h1></body></html>');
  res.end();
});

eventEmitter.on('HomePageEvent', (res) => {
    // asynchronously log that homepage is loaded
  console.log("Homepage loaded");
});

eventEmitter.on('HomePageEvent', (req) => {
    // asynchronously log ip add
  console.log('Visited homepage from IP:', req.socket.remoteAddress);
});

// Create and start server
var server = http.createServer(requestHandler);

server.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
>>>>>>> ba27f419cbc9f8e6cacee8b90bac0535392cac6c
});