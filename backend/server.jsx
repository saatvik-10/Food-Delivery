import express from 'express';
import path from 'path';
import connectDB from './config/dbConnect.js';
import dotenv from 'dotenv';
import colors from 'colors';
import userRoutes from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
import { notFound, errHandler } from './middlewares/errMiddleware.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started with PORT ${port}`.bgWhite.white);
});
