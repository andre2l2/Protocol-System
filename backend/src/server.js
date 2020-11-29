const express = require('express');
const cors = require('cors');
const server = express();

const process = require('./database/controllers/process');
const users = require('./database/controllers/users');
const login = require('./database/controllers/login');

const memory = require('./test/memory');

// Setings express
server.use(express.json());
server.use(cors());

// Router process
server.get('/process', process.list); 
server.put('/process/:number/:year', process.filter);
server.post('/process', process.create);

// Login user
server.post('/login', login.list);

// Router loguin
server.get('/user', users.list);
server.put('/user/:user', users.filter);
server.post('/user', users.create);

server.listen('3333');