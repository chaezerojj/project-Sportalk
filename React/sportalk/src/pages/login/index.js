import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Index() {
  const [form, setForm] = useState({
    userId: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.userId.trim() === '' || form.password.trim() === '') {
      setErrorMessage('아이디와 비밀번호를 모두 입력해주세요!');
      return;
    }
    setErrorMessage('');
    console.log('로그인 성공!');
    alert('로그인 성공!');
    navigate('/');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>로그인</h2>
        <div>
          <label htmlFor="userId"></label>
          <input type="text" id="userId" name="userId" value={form.userId} onChange={handleChange} placeholder="아이디" />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input type="password" id="password" name="password" value={form.password} onChange={handleChange} placeholder="비밀번호" />
        </div>
        <button type="submit">로그인</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p className="login-message"><br></br>
          계정이 없으신가요? <Link to="/sportalk/signup" className="login-link">회원가입</Link>
        </p>
      </form>
    </div>
  );
}

export default Index;
