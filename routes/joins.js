/*회원가입 라우터*/
const express = require('express');
const User = require('../models/user');
const Comment = require('../models/comment');
const bcrypt = require('bcrypt');

const router = express.Router();

router.route('/')
    .get(async (req, res, next) => {
        try {
            const users = await User.findAll();
            res.json(users); //index.js와 차이점, json형식으로 반환
        } catch (err) {
            console.error(err);
            next(err);
        }
    })
    .post(async (req, res, next) => {
        try {
            const hash = await bcrypt.hash(req.body.userPW, 12);
            const emailHash = await bcrypt.hash(req.body.email, 12);
            const user = await User.create({
                userID: req.body.userID,
                userPW: hash,
                userName: req.body.userName,
                email: req.body.email,
                emailHash: emailHash,
                phonenumber: req.body.phonenumber,
            });
            console.log(user);
            res.status(201).json(user);
        } catch(err) {
            console.error(err);
            return next(error);
        }
    });


    module.exports = router;