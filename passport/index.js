const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const User = require('../models/user');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.userID); //로그인시 req.session에 사용자 정보 저장
    });

    passport.deserializeUser((userID, done) => {
        User.findOne({ where: { userID } })
            .then(user => done(null, user)) //req.user에 저장
            .catch(err => done(err));
    });

    local(); //localStrategy 호출
}