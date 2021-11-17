const express = require('express');
const path = require('path');
const movie = require('../models/movie');
const router = express.Router();

router.get('/', async (req, res) => {
    // res.sendFile(path.join(__dirname, '../views/main.html'))
    try {

        const title = movie().title; 
        const titleNo = movie().titleNo;
        const boardNo = movie().boardNo;
        // const yearNum = movie().yearNum;
        const yearNum = 0;
        res.render('movie2.html', { title, titleNo, boardNo, yearNum }); //render함수만 넌적스 적용됨. sendfile메서드는 불가
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;