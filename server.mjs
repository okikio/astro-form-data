import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

const app = express();
app.use(express.static('dist/client/'));
app.use(ssrHandler);

app.listen(8080);
