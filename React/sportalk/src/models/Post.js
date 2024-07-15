const { Sequelize, DataTypes } = require('sequelize');

// Sequelize 인스턴스 생성 및 데이터베이스 연결 설정
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Post 모델 정의
const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  nickName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  regDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  like: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  commentCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

// 데이터베이스와 동기화하기
sequelize.sync()
  .then(() => {
    console.log("MySQL 데이터베이스와 동기화 완료.");
  })
  .catch(err => {
    console.error("MySQL 동기화 오류: ", err);
  });

module.exports = Post;
