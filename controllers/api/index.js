"use strict";

const express = require('express');
const router = express.Router();
const tokenVerification = require('../../middlewares/tokenverification');

// const userRegexp = /<@[0-9A-Z]+(\|.+)?>/i;

router.use('/api', tokenVerification);

router.post('/api', function(req, res) {
    let text = req.body.text;
    const response = {
        response_type: "in_channel",
        text: "Testing"
    };
    res.json(response);
});

module.exports = router;