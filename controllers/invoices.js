import Invoice from '../models/invoice.js';
import Customer from '../models/customer.js';
import Product from '../models/product.js';

export const getAllInvoices = async (req, res) => {
	try {
		const allInvoices = await Invoice.find({}).populate(['products', 'customer']);
		res.status(200).json(allInvoices);
	} catch(error) {
		res.status(404).json({message: error.message});
	}
}

export const createInvoice = async (req, res) => {
	try {
		const {metaForm, products, customer} = req.body;
		let productIds = [];
		let productsSum = 0;
		let taxAmount = 0;
		let discountAmount = 0;
		let grandTotal = 0;
		const tax = isNaN(parseFloat(metaForm.tax)) ? 0 : parseFloat(metaForm.tax);
		const discount = isNaN(parseFloat(metaForm.disount)) ? 0 : parseFloat(metaForm.disount);

		if(products.length){
			const newProducts  = await Product.create(products);
			productIds = newProducts.map(product => {
				productsSum += product.price;
				return product._id
			});
		  taxAmount = (productsSum * tax) / 100;
			const taxedTotal = productsSum + taxAmount;
			discountAmount = (taxedTotal * discount) / 100;
			grandTotal = taxedTotal - discountAmount;
		}else{
			return res.status(409).json({message: 'Invalid data'});
		}

		const newCustomer =  await Customer.create(customer);
		const	invoiceData = {
			products: productIds,
			customer:  newCustomer._id,
			tax,
			taxAmount,
			discount,
			discountAmount,
			productsSum,
			grandTotal
		}

		const newInvoice = await Invoice.create(invoiceData);
		await newInvoice.populate(['products', 'customer']).execPopulate();
		return res.json(newInvoice);
	} catch (error) {
		res.status(409).json({message: error.message});
	}
}