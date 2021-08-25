import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
	name: {
		type: String,
		default: ''
	},
	quantity: {
		type: Number,
		default: 0
	},
	price: {
		type: Number,
		default: 0
	}
},
	{timestamps: true}
);

const Product = mongoose.model('Product', productSchema);
export default Product;