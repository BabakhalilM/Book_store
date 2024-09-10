import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {} from 'dotenv/config';
import connectDB from './config/db.js';
import bookrouter from './controls/books.js';

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use('/api',bookrouter);

const PORT = process.env.port || 3200;
app.listen(PORT, async() => {
try{
    await connectDB();
    console.log(`Server running on port ${PORT}`);
}catch(err){
    console.log(err);
}
});
