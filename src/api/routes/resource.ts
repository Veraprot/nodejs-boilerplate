import { Router, Request, Response, NextFunction } from 'express';
import ResourceService from '../../services/resource'

const route = Router();

export default (app: Router) => {
  app.use('/resources', route);

  route.post(
    '/',
    async (req: Request, res: Response, next: NextFunction) => {
      
    try {
        const dictionaryRecord = await ResourceService.create()
        return res.status(201).json({"created": 'resource created'})
      } catch (e) {
        res.json({error: e})
        return next(e);
      }
    },
  );
};
