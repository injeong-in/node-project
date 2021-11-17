const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../views/main.html'))
    res.render('ost-search.html'); //render함수만 넌적스 적용됨. sendfile메서드는 불가
});

module.exports = router;