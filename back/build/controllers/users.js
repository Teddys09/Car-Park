"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.signupUser = void 0;
const mongo_1 = require("../mongo");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function signupUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const email = req.body.email;
        const password = req.body.password;
        const nickName = req.body.nickName;
        const hashedPassword = yield hashPassword(password);
        const user = new mongo_1.User({
            email: email,
            nickName: nickName,
            password: hashedPassword,
        });
        user
            .save()
            .then(() => {
            res.status(201).send({ message: 'Signup with success' });
        })
            .catch((err) => res.status(409).send({ message: "Problème d'enregistrement ! " + err }));
    });
}
exports.signupUser = signupUser;
function hashPassword(password) {
    const saltRounds = 10;
    return bcrypt_1.default.hash(password, saltRounds);
}
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const user = yield mongo_1.User.findOne({ email: email });
            const valablePassword = yield bcrypt_1.default.compare(password, user.password);
            if (!valablePassword) {
                res.status(401).send({ message: 'Mot de passe incorrect' });
                return;
            }
            const token = createToken(email);
            res.status(200).send({ userId: user === null || user === void 0 ? void 0 : user._id, token: token });
        }
        catch (err) {
            console.log(err);
            res.status(500).send({ message: 'Internal Error' });
        }
    });
}
exports.loginUser = loginUser;
function createToken(email) {
    const tokenPassword = process.env.TOKENPASSWORD;
    const token = jsonwebtoken_1.default.sign({ email: email }, tokenPassword, {
        expiresIn: '24h',
    });
    return token;
}
