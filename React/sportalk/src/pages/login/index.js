import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axiosInstance from '../../api'; // Assuming you have a configured axios instance
import { useAuth } from '../../contexts/AuthProvider';

function Index() {
  const [form, setForm] = useState({
    userId: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useAuth(); // Custom hook to handle authentication
  const navigate = useNavigate(); // Hook for navigating programmatically

  // Handle input change in form fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (form.userId.trim() === '' || form.password.trim() === '') {
      setErrorMessage('아이디와 비밀번호를 모두 입력해주세요!');
      return;
    }
    setErrorMessage('');

    try {
      // Make POST request to login endpoint
      const response = await axiosInstance.post('/auth/login', {
        userId: form.userId,
        password: form.password,
      });

      // Check if login was successful (assuming status 200 means success)
      if (response.status === 200) {
        console.log('로그인 성공!');
        alert('로그인 성공!');
        login(form.userId); // Call login function from AuthProvider (handle setting user state, etc.)
        navigate('/sportalk'); // Redirect to main application page after successful login
      } else {
        console.error('로그인 실패:', response.data);
        alert('로그인에 실패했습니다.');
      }
    } catch (error) {
      console.error('로그인 요청 실패:', error);
      alert('로그인 요청에 실패했습니다.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>로그인</h2>
        <div>
          <label htmlFor="userId">아이디</label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={form.userId}
            onChange={handleChange}
            placeholder="아이디"
            required // Ensures the field is not empty
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="비밀번호"
            required // Ensures the field is not empty
          />
        </div>
        <button type="submit">로그인</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p className="login-message">
          계정이 없으신가요? <Link to="/sportalk/signup" className="login-link">회원가입</Link>
        </p>
      </form>
    </div>
  );
}

export default Index;
