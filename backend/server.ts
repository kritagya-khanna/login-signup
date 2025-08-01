import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
//to allow requests from frontend
app.use(cors());
//to parse json
app.use(express.json());

//routes
const useRoutes = require('./routes');
app.use('/auth', useRoutes);

app.listen(process.env.PORT || 5000, () => {
    console.log("hello");
} )