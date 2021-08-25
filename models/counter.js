import mongoose from 'mongoose';

const counterSchema = mongoose.Schema({
	count: {
		type: Number,
		default: 2
	},
	model: {
		type: String,
		default: ''
	},
	fieldName: {
		type: String,
		default: '' 
	}
},
	{timestamps: true}
);

const Counter = mongoose.model('Counter', counterSchema);
export default Counter;

