import { Router } from 'express';
import resource from './routes/resource';

// guaranteed to get dependencies
export default () => {
	const app = Router();
	resource(app);

	return app
}