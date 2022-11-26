"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.mongoose = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.mongoose = mongoose_1.default;
const uniqueValidator = require('mongoose-unique-validator');
const password = process.env.DB_PASSWORD;
const username = process.env.DB_USER;
const uri = `mongodb+srv://${username}:${password}@cluster0.ji1bsbm.mongodb.net/?retryWrites=true&w=majority`;
mongoose_1.default
    .connect(uri)
    .then(() => console.log('Connected to mongo'))
    .catch((err) => console.log('Error', err));
const userSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true, unique: true },
    nickName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
userSchema.plugin(uniqueValidator);
const User = mongoose_1.default.model('User', userSchema);
exports.User = User;
