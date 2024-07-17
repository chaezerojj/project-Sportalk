// src/routes/signUpRouter.js

const express = require('express');
const router = express.Router();
const User = require('../models/User'); // User 모델
const bcrypt = require('bcryptjs'); // bcrypt 라이브러리
const cors = require('cors'); // CORS 설정

// CORS 설정
router.use(cors({ origin: 'http://localhost:3000' }));

// 회원가입 라우트
router.post('/api/auth/signup', async (req, res) => {
  try {
    const { userId, password, nickName, name, email } = req.body;

    // 입력값 유효성 검사
    if (!userId || !password || !nickName || !name || !email) {
      return res.status(400).json({ error: '모든 필드를 채워주세요.' });
    }

    // 이미 존재하는 사용자 확인
    const existingUser = await User.findOne({ where: { userId } });
    if (existingUser) {
      return res.status(400).json({ error: '이미 존재하는 사용자 ID입니다.' });
    }

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 10);

    // 새로운 사용자 생성
    const newUser = await User.create({
      userId,
      password: hashedPassword,
      nickName,
      name,
      email,
    });

    // 응답 성공
    res.status(200).json({
      message: '회원가입이 성공적으로 완료되었습니다!',
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
    res.status(500).json({ error: '서버 오류: 회원가입 처리 중 오류가 발생했습니다.' });
  }
});

module.exports = router;
