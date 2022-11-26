import mongoose from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator');
const password = process.env.DB_PASSWORD;
const username = process.env.DB_USER;
const uri = `mongodb+srv://${username}:${password}@cluster0.ji1bsbm.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(uri)
  .then(() => console.log('Connected to mongo'))
  .catch((err: any) => console.log('Error', err));

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  nickName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema);

export { mongoose, User };
