import express from 'express';
const app = express();
import connectDB from './db/conn.js'
connectDB('mongodb+srv://aditya:1234@cluster0.jw8wy.mongodb.net/sample_mflix');

import userRoutes from './routes/routes.js';

app.use('/',userRoutes)


app.listen(4000, () => {
    console.log('Server is running on port 4000');
});