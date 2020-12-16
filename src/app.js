import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { connectDB } from './db';
import { UserRouter, PostRouter, CommentRouter } from './routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', UserRouter);
app.use('/posts', PostRouter);
app.use('/comments', CommentRouter);

connectDB().then(async () => {
  app.listen(process.env.PORT, () => {
    console.log(`Blog API listening on port ${process.env.PORT}`);
  });
});
