import express from 'express';
import multer from 'multer';

// file path stuff 
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();

// storage object, tells multer where to put the file and what name to give it 
var storage = multer.diskStorage({
    // you call a callback to pass data back to the parent after a function. inthis case we pass the data back up to multer via the callback()
    destination: (req, file, callback ) => {
        callback(null, 'uploads/');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});

// changed .single() expect only a single field to .fields() where you need to specify input is the upload, in this case the "name" of the <input> in your html
var upload = multer({ storage: storage }).fields([{ name: 'file', maxCount: 1}]);;

// Open form on index (/)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'uploadForm.html'));
});

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    // Check if successful
    if (err) {
      return res.end('Error uploading file');
    } else {
      // console.log(req.file); 
      res.end('File uploaded successfully');
    }
  });
});

var server = app.listen(5000, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log("server running at http://%s:%s/", host, port);
});