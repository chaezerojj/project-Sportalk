const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// 사용자 모델 정의
const User = sequelize.define('User', {
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // userId는 고유
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nickName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
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

module.exports = User;