"use strict";

const addPlayer = require('../../lib/actions').addPlayer;

const express = require('express');
const router = express.Router();
const fs = require('fs');
const tokenVerification = require('../../middlewares/tokenverification');

router.use('/api', tokenVerification);

router.post('/api', function(req, res) {
    console.log(req.body);

    const player = {
        id: req.body.user_id,
        name: req.body.user_name
    };
    global.game.dispatch(addPlayer(player));

    const state = JSON.stringify(global.game.getState());
    fs.writeFileSync('./data/state.json', state, {charset: 'utf8'});

    const response = {
        response_type: "in_channel",
        text: "Added new player to the game: @" + player.name,
        link_names: true
    };
    res.json(response);
});

module.exports = router;