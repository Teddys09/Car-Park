import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { Park } from '../mongo';

function getAllParks(req: Request, res: Response, next: NextFunction) {
  console.log('getAllParks');

  Park.find({})
    .then((parks) => {
      if (parks.length > 0) {
        res.send(parks);
      } else {
        res.send({ message: 'No park found' });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}

function addNewPark(req: Request, res: Response, next: NextFunction) {
  const park = new Park({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,

    location: req.body.location,
    rating: req.body.rating,
    space: req.body.space,
    maxSpace: req.body.maxSpace,
    property: req.body.property,
  });

  park
    .save()
    .then(() => {
      res.status(201).send({ message: 'Park added with success' });
    })
    .catch((err) =>
      res.status(409).send({ message: 'Register issue ! ' + err })
    );
}

export { getAllParks, addNewPark };
