"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllParks = void 0;
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
