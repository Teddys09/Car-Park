import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { Park } from '../mongo';

function getAllParks(req: Request, res: Response, next: NextFunction) {
  console.log('getAllParks');

  Park.find({})
    .then((parks) => {
      res.send(parks);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}

export { getAllParks };
