
const Sequelize = require('sequelize');
const User = require('./user');
const Comment = require('./comment');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};





const sequelize = new Sequelize(config.database, config.username, config.password, config); //DB계정 연결 from config.json

db.sequelize = sequelize; //연결객체 재사용하기 위해 넣어둠


db.User = User;
db.Comment = Comment;

User.init(sequelize); //static.init메서드 호출(init이 실행되어야 테이블이 모델로 연결)
Comment.init(sequelize);

User.associate(db); //다른 테이블과의 관계 연결
Comment.associate(db);

module.exports = db;

// var a = User.init(sequelize);
// console.log(a.userName)