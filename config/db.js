import mongoose from 'mongoose';
import { CONNECTION_URL, PORT } from '../constants.js';

export const connectDatabase = async (app) => {
	try {
		await mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true});
		const router = await import('../routes/index.js');
		app.use('/api', router.default);
		app.listen(process.env.PORT || PORT, console.log(`server listening on port ${PORT}`));
	} catch (error) {
		process.exit(1);
	}	
}
