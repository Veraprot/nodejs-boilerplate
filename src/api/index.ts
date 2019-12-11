import { Router, Request, Response, NextFunction } from 'express';

const app = Router();

app.get('/', (req: Request, res: Response, next: NextFunction)=> {
  try {
    res.json({ message: 'Welcome to my simple API' })
  } catch (error) {
    res.status(error.status).json({ message: error.message })
  }
})

export default app