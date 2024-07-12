// src/routes/signUpRouter.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const axios = require('axios');

// CORS 설정
router.use(cors({ origin: 'http://localhost:3000'}));

// POST 
// - /api/auth/signup 라우트
router.post('/signup', async (req, res) => {
  try {
    // 회원가입 로직
    const { userId, password, nickName, name, email } = req.body;

    // 패스워드를 bcryptjs를 사용하여 해싱하기
    const hashedPassword = await bcrypt.hash(password, 10);

    // 회원가입 처리 로직 구현
    const newUser = await User.create({
      userId,
      password,
      nickName,
      name,
      email,
    });

    // 응답 성공
    res.status(200).json({ message: '회원가입이 성공적으로 완료되었습니다!',
      user: {
        id: newUser.id,
        userId: newUser.userId,
        nickName: newUser.nickName,
        name: newUser.name,
        email: newUser.email,
      }
    });
  } catch (error) {
    console.error('회원가입 오류: ', error);
    res.status(500).json({ error: '서버 오류: 회원가입 처리 중 오류가 발생했습니다.'})
  }
});

module.exports = router;