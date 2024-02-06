import express from 'express'

const app = express();
app.use(cors());

const PORT = 8000;



app.listen(PORT, () => console.log(`My server started on PORT ${PORT}`));