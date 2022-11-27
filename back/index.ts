require('dotenv').config();
import express from 'express';
const app = express();
const port = 5000;
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

//Database
import('./mongo');
//Controllers
import { signupUser, loginUser } from './controllers/users';
import { scanUser } from './middleware/scanUser';
import { getAllParks, addNewPark } from './middleware/park';

//Middleware
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());

// const { scanUser } = require('./middleware/scanUser');

//Routes

app.post('/api/auth/signup', signupUser);
app.post('/api/auth/signin', loginUser);
app.get('/api/park/all', scanUser, getAllParks);
app.post('/api/park/add', scanUser, addNewPark);

app.get('/', (req, res) => res.send('hello world'));

//Listen
app.listen(port, () => console.log('Listening on port ', port));
