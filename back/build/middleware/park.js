"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewPark = exports.getAllParks = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongo_1 = require("../mongo");
function getAllParks(req, res, next) {
    console.log('getAllParks');
    mongo_1.Park.find({})
        .then((parks) => {
        res.send(parks);
    })
        .catch((err) => {
        res.status(500).send(err);
    });
}
exports.getAllParks = getAllParks;
function addNewPark(req, res, next) {
    const park = new mongo_1.Park({
        _id: new mongoose_1.default.Types.ObjectId(),
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
        .catch((err) => res.status(409).send({ message: "Problème d'enregistrement ! " + err }));
}
exports.addNewPark = addNewPark;
