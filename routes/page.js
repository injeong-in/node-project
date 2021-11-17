const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { User, Comment } = require('../models');

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.followerCount = req.user ? req.user.Followers.length : 0;
  res.locals.followingCount = req.user ? req.user.Followings.length : 0;
  res.locals.followerIdList = req.user ? req.user.Followings.map(f => f.id) : [];
  next();
});

router.get('/profile', isLoggedIn, (req, res) => {
  res.render('main');
});

router.get('/join', isNotLoggedIn, (req, res) => {
  res.render('memberjoin', { title: '회원가입 - bestmovie' });
});

router.get('/', async (req, res, next) => {
  try {
    const posts = await Comment.findAll({
      include: {
        model: User,
        attributes: ['userID', 'userName'],
      },
    //   order: [['createdAt', 'DESC']],
    });
    res.render('main', {
      title: 'movie',
      twits: posts,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/hashtag', async (req, res, next) => {
  const query = req.query.hashtag;
  if (!query) {
    return res.redirect('/');
  }
  try {
    const hashtag = await Hashtag.findOne({ where: { title: query } });
    let posts = [];
    if (hashtag) {
      posts = await hashtag.getPosts({ include: [{ model: User }] });
    }

    return res.render('main', {
      title: `${query} | NodeBird`,
      twits: posts,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;