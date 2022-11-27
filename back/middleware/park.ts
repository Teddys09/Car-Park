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

function addNewPark(req: Request, res: Response, next: NextFunction) {
  const park = new Park({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    rating: req.body.rating,
    space: req.body.space,
  });

  park
    .save()
    .then(() => {
      res.status(201).send({ message: 'Park added with success' });
    })
    .catch((err) =>
      res.status(409).send({ message: "Problème d'enregistrement ! " + err })
    );
}

export { getAllParks, addNewPark };
