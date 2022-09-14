import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';
import multer from 'multer';

const upload = multer();

const app = express();
app.use(express.static('dist/client/'));
app.use(ssrHandler);

app.post('/cool-profile', upload.array('files'), function (req, res, next) {
  console.log(req.files);
  // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
  //
  // e.g.
  //  req.files['avatar'][0] -> File
  //  req.files['gallery'] -> Array
  //
  // req.body will contain the text fields, if there were any
  res.json({ fileNames: req.files.map((file) => file.originalname) });
});

app.listen(8080);
