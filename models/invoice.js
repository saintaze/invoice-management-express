import mongoose from 'mongoose';
import { updateCounter } from '../utils/helpers.js';

const invoiceSchema = mongoose.Schema({
	customer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Customer'
	},
	products: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Product',
		default: []
	}],
	tax: {
		type: Number,
		default: 0
	},
	discount: {
		type: Number,
		default: 0
	},
	invoiceId: {
		type: Number,
		default: 1
	},
	productsSum: {
		type: Number,
		default: 0
	},
	taxAmount: {
		type: Number,
		default: 0
	},
	discountAmount: {
		type: Number,
		default: 0
	},
	grandTotal: {
		type: Number,
		default: 0
	}
},
	{timestamps: true}
);

invoiceSchema.pre('save', async function (next) {
	await updateCounter('Invoice', 'invoiceId', this, next);
})

const Invoice = mongoose.model('Invoice', invoiceSchema);
export default Invoice;