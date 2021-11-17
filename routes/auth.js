const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares'); 
const User = require('../models/user');

const router = express.Router();

// router.post('/join', isNotLoggedIn, async (req, res, next) => {
//     const { email, userName, userPW} = req.body;
//     try {
//         const exUser = await User.findOne({where: {email}});
//         if (exUser) {
//             return res.redirect('/join?error=exist');
//         }
//         const hash = await bcrypt.hash(password, 12);
//         await User.create({
//             email,
//             userName,
//             userPW: hash,
//         });
//         return res.redirect('/');
//     } catch(error) {
//         console.error(error);
//         return next(error);
//     }
// });

router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        console.log('ID:' + req.body.userID);
        console.log('PW: '+ req.body.userPW);
        if (authError) {
            console.error(authError);
            return next(authError);
        }
        if (!user) {
            return res.redirect(`/?loginError=${info.message}`);
        }
        return req.login(user, (loginError) => {
            if (loginError) {
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/');
        });
    })(req, res, next);
});

router.get('/logout', isLoggedIn, (req, res) => {
    req.logout(); //req.user객체 제거
    req.session.destroy(); //req.session객체내용 제거
    res.redirect('/');
});

module.exports = router;