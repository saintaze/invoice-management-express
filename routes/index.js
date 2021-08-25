import express from 'express';
const router = express.Router();
import invoicesRouter from './invoices.js';

router.use('/invoices', invoicesRouter);

export default router;