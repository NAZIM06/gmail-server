import express from 'express'
import Connection from './Database/db.js';

const app = express();
// app.use(cors());

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`My server started on PORT ${PORT}`));