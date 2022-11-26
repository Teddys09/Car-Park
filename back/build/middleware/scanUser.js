"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function scanUser(req, res, next) {
    const header = req.header('Authorization');
    if (header == null)
        return res.status(403).send({ message: 'Invalid' });
    const token = header.split(' ')[1];
    if (token == null)
        return res.status(403).send({ message: "token can't be null" });
    jsonwebtoken_1.default.verify(token, process.env.TOKENPASSWORD, (err) => {
        if (err)
            return res.status(403).send({ message: 'token invalid' + err });
        next();
    });
}
module.exports = { scanUser };
