const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

router.post('/', async (req, res, next) => {
    console.log(req.body.email);
    const user = await User.findOne({ email: req.body.email });
    if(!user) {
        return res.status(400).json({
            message: 'Auth Failed'
        });
    }
    if(user.password === req.body.password) {
        return res.status(200).json({
            user: user
        });
    }
});

module.exports = router;
