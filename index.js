import express from 'express';
import cors from 'cors';
import { connectDatabase } from './config/db.js';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

connectDatabase(app);

