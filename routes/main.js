const express = require('express');
const path = require('path');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { User, Comment } = require('../models');

router.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.followerCount = 0;
    res.locals.followingCount = 0;
    res.locals.followerIdList = [];
    next();
  });

router.get('/', async (req, res, next) => {
    // res.sendFile(path.join(__dirname, '../views/main.html'))
    try {
        const users = await User.findAll({
            attributes: ['userID', 'userPW', 'userName', 'email', 'phonenumber'],
        });
        const comments = await Comment.findAll({
            attributes: ['USER_ID', 'BOARD_ID', 'REPLY_CONTENT'],
        });
        res.render('main.html', { users, comments }); //render함수만 nunjucks 적용
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;