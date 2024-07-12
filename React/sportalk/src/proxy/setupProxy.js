// src/proxy/setupProxy.js
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', 
    createProxyMiddleware({
    target: 'http://localhost:8080', // 백엔드 서버 주소
    changeOrigin: true,
    pathRewrite: {
      '^/api': '' // 요청에서 '/api' 경로 제거하기
    },
  }));
};