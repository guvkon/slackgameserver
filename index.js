"use strict";

require('dotenv').config();
const express = require('express');
const router = express.Router();
const fs = require('fs');
import { createStore } from 'redux';
import gameApp from './lib/reducers';

const state = fs.readFileSync('./data/state.json', {charset: 'utf8'});
global.game = createStore(gameApp, JSON.parse(state));
global.game.subscribe(
    () => console.log(global.game.getState())
);

const app = express();

app.set('view engine', 'pug');
app.use('/slack/game', require('./controllers'));
app.get('/slack/test', (req, res) => {
    res.send("Test");
});

app.listen(process.env.SERVER_PORT, function () {
    console.log('Listening on ', this.address());
});


module.exports = router;