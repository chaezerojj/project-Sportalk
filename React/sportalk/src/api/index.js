// src/api/index.js
// 백엔드와 api 통신 담당하는 곳
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080", // 백엔드 서버
  withCredentials: true, // 크로스 도메인 요청 시 자격 증명 정보(쿠키 등)를 포함
  headers: {
    'Content-Type': 'application/json',
  }
});

export default axiosInstance;