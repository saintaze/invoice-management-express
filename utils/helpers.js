import Counter from '../models/counter.js';

export async function updateCounter(model, fieldName, doc, next) {
	let counter = await Counter.findOne({ model, fieldName });
	let currentCount = 1;
	if(!counter){
		counter = await Counter.create({ model, fieldName, count: 2 });
	}else{
		currentCount = counter.count;
		await counter.update({ model, fieldName, count: currentCount + 1 });
	}
	doc[fieldName] = currentCount;
	next();
}