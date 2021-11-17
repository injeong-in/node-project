
/*회원가입 모델*/
const express = require('express');
const User = require('../models/user');
const Comment = require('../models/comment');

const router = express.Router();

router.get('/', async (req, res) => {
    // res.sendFile(path.join(__dirname, '../views/main.html'))
    try {
        const users = await User.findAll({
            attributes: ['userID', 'userPW', 'userName', 'email', 'phonenumber'],
        });
        const comments = await Comment.findAll({
            attributes: ['USER_ID', 'BOARD_ID', 'REPLY_CONTENT'],
        });
        res.render('memberjoin.html', { users, comments }); //render함수만 넌적스 적용됨. sendfile메서드는 불가
    } catch (err) {
        console.error(err);
    }
});

router.get('/joiner', async (req, res, next) => {
    try {
        const users = await User.findAll({
            attributes: ['userID', 'userPW', 'userName', 'email', 'phonenumber'],
        });
        
        res.json(users);
    } catch (err) {
        console.error(err);
    }
});


module.exports = router;