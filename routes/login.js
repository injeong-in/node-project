const express = require('express');
const path = require('path');
const User = require('../models/user');
const Comment = require('../models/comment');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');

const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.followerCount = 0;
    res.locals.followingCount = 0;
    res.locals.followerIdList = [];
    next();
});

router.get('/', async (req, res) => {
    // res.sendFile(path.join(__dirname, '../views/main.html'))
    try {
        const users = await User.findAll({
            attributes: ['userID', 'userPW', 'userName', 'email', 'phonenumber'],
        });
        const comments = await Comment.findAll({
            attributes: ['USER_ID', 'BOARD_ID', 'REPLY_CONTENT'],
        });
        res.render('login.html', { users, comments }); //render함수만 넌적스 적용됨. sendfile메서드는 불가
    } catch (err) {
        console.error(err);
    }
});



router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile', { title: '내 정보 - bestmovie'});
});

router.get('/join', isNotLoggedIn, (req, res) => {
    res.render('join', { title: '회원가입 - bestmovie'});
});


module.exports = router;