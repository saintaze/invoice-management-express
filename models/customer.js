import mongoose from 'mongoose';

const customerSchema = mongoose.Schema({
	fullName: {
		type: String,
	},
	phone: {
		type: Number
	},
	address: {
		type: String
	},
	email: {
		type: String
	},
	pinCode: {
		type: Number
	},
},
	{timestamps: true}
);

const Customer = mongoose.model('Customer', customerSchema);
export default Customer;