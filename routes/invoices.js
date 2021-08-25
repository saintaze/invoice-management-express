import express from 'express';
const invoicesRouter = express.Router();
import * as invoicesController from '../controllers/invoices.js';

invoicesRouter.get('/', invoicesController.getAllInvoices);
invoicesRouter.post('/', invoicesController.createInvoice);


export default invoicesRouter;