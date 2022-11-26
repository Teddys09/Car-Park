require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

//Database
require('./mongo');
//Controllers
const { signupUser, loginUser } = require('./controllers/users');

//Middleware
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());

const { scanUser } = require('./middleware/scanUser');

//Routes

app.post('/api/auth/signup', signupUser);
app.post('/api/auth/signin', loginUser);

app.get('/', (req, res) => res.send('hello world'));

//Listen
app.listen(port, () => console.log('Listening on port ', port));
