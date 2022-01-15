const express = require("express");

const app = express();
app.use(express.json());


const albumController = require('./controllers/album.controller');
const signupController = require('./controllers/signup.controller');



app.use('/', albumController);
app.use('/', signupController);


module.exports =   app;