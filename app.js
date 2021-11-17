const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const nunjucks = require('nunjucks');
const ejs = require('ejs');
const dotenv = require('dotenv');
const passport = require('passport');
const { sequelize } = require('./models');


dotenv.config();
const app = express();
const passportConfig = require('./passport'); // .passport/index.js(인덱스는 생략가능)
passportConfig();

app.set('view engine', 'ejs'); 
app.engine('html', require('ejs').renderFile); //html파일을 ejs로 렌더링 설정(라우팅코드에 .html붙여줘야함)

const userRouter = require('./routes/main');
const loginRouter = require('./routes/login')
const joinRouter = require('./routes/join');
const joinsRouter = require('./routes/joins');
const ostRouter = require('./routes/ost');
const movieRouter = require('./routes/movie');
const authRouter = require('./routes/auth');
const pageRouter = require('./routes/page');
// const { session } = require('passport');


app.set('port', process.env.PORT || 3000); //서버가 실행될 포트 설정

/** 넌적스 템플릿 엔진 설정(라우팅 코드에 .html 확장자 안붙여도됨) */
// app.set('view engine', 'html');
// nunjucks.configure('views', { 
//     express: app,
//     watch: true, //HTML코드가 변경될때 템플릿 엔진을 다시 렌더링
// });


sequelize.sync({force: false})
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error("에러원인:"+ err);
    });

app.use((req, res, next) => {
    console.log('GET / 요청에서만 실행됩니다.');
    next();
});

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false})); //false면 기본으로 내장된 querystring모듈 사용, true면 따로 설치가 필요한 qs모듈 사용하여 쿼리스트링 해석
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 600000,
    },
}));
app.use(passport.initialize()); //req객체에 passport 설정 심음
app.use(passport.session()); //req.session 객체에 passport 정보 저장
//req.session 객체는 express-session에서 생성

app.use('/', userRouter); //페이지 라우팅
app.use('/login', loginRouter);
app.use('/join', joinRouter);
app.use('/joins', joinsRouter);
app.use('/ost', ostRouter);
app.use('/movie', movieRouter);
app.use('/auth', authRouter);
app.use('/page', pageRouter);
// app.use(express.static('public'));  //정적경로 폴더 지정


app.get('/', (req, res, next) => {
    res.send('Hello, express');
    next();
}, (req, res) => {
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});