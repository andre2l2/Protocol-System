const express = require('express');
const cors = require('cors');
const server = express();

const process = require('./database/controllers/process');
const users = require('./database/controllers/users');

// Setings express
server.use(express.json());
server.use(cors());

// Router process
server.get('/process', process.list); 
server.put('/process/:number/:year', process.filter);
server.post('/process', process.create);

// Router loguin
server.get('/login', users.list);
server.put('/login/:user', users.filter);
server.post('/login', users.create);

server.listen('3333');  