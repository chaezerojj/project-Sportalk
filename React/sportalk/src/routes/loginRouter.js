// src/routes/loginRouter.js

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 8000; // 프록시 서버 포트

app.use(cors()); // 모든 도메인에서의 요청 허용
app.use(bodyParser.json()); // JSON 형식의 요청 본문 파싱

// 백엔드 API URL 설정
const BACKEND_URL = 'http://localhost:8000'; // 백엔드 서버의 주소로 변경

// 로그인 요청 처리
app.post('/api/auth/login', async (req, res) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/auth/login`, req.body, {
      headers: {
        'Content-Type': 'application/json',
        method: 'POST'
      }
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
});

// 로그아웃 요청 처리
app.post('/api/auth/logout', async (req, res) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/auth/logout`, req.body, {
      headers: {
        'Content-Type': 'application/json',
        method: 'POST'
      }
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
