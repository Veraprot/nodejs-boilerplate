import { Router, Request, Response, NextFunction } from 'express';
// import ResourceService from '../../services/resource'

const route = Router();

export default (app: Router) => {
  app.use('/resources', route);

  route.get(
    '/',
    async (req: Request, res: Response, next: NextFunction) => {
      
    try {
        res.json({ message: 'Welcome to my API' })
      } catch (err) {
        res.status(err.status).json({ message: err.message })
      }
    },
  );
};
