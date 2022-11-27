import { NextFunction, Request, Response } from 'express';

function getAllParks(req: Request, res: Response) {
  res.send('hello world');
}

export { getAllParks };
