import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import axiosInstance from '../../api';

function Signup() {
  const [form, setForm] = useState({
    userId: '',
    password: '',
    confirmPassword: '',
    nickName: '',
    name: '',
    email: '',
    emailDomain: '@naver.com',
  });

  const [errors, setErrors] = useState({
    userId: '',
    nickName: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // 유효성 검사
    if (name === 'userId' && value.length < 6) {
      setErrors({ ...errors, userId: '아이디는 6자 이상이어야 합니다.' });
    } else {
      setErrors({ ...errors, userId: '' });
    }

    if (name === 'nickName' && value.length < 2) {
      setErrors({ ...errors, nickName: '닉네임은 2자 이상이어야 합니다.' });
    } else {
      setErrors({ ...errors, nickName: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      form.userId.trim() === '' ||
      form.password.trim() === '' ||
      form.confirmPassword.trim() === '' ||
      form.nickName.trim() === '' ||
      form.name.trim() === '' ||
      form.email.trim() === ''
    ) {
      alert('빈 칸을 모두 작성해주세요');
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }

    try {
      const response = await axiosInstance.post('/api/auth/signup', {
        userId: form.userId,
        password: form.password,
        nickName: form.nickName,
        name: form.name,
        email: `${form.email}${form.emailDomain}`,
      });
      console.log('회원가입 성공:', response.data);
      alert('회원가입 되었습니다');
      // 회원가입 성공 후 로그인 페이지로 이동
      navigate('/sportalk/login');
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert('회원가입에 실패했습니다.');
    }
  };

  const handleCancel = () => {
    alert('회원가입이 취소되었습니다');
    navigate('/');
  };

  const handleCheckDuplicate = async (field) => {
    let value = form[field].trim();
    if (value === '') {
      alert(`${field === 'userId' ? '아이디' : '닉네임'}를 입력해주세요`);
      return;
    }
    if ((field === 'userId' && value.length < 6) || (field === 'nickName' && value.length < 2)) {
      alert(`${field === 'userId' ? '아이디는 6자 이상' : '닉네임은 2자 이상'}이어야 합니다.`);
      return;
    }
  };

  const emailDomains = ['@naver.com', '@gmail.com', '@daum.net', '@hanmail.net', '@yahoo.com'];

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>회원가입</h2>
        <div className="form-group">
          <label htmlFor="userId">아이디</label>
          <div className="input-group">
            <input
              type="text"
              id="userId"
              name="userId"
              value={form.userId}
              onChange={handleChange}
              placeholder="아이디 입력 (6-12자)"
            />
            <button
              type="button"
              className="check-duplicate"
              onClick={() => handleCheckDuplicate('userId')}
            >
              중복확인
            </button>
          </div>
          {errors.userId && <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.userId}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="nickName">닉네임</label>
          <div className="input-group">
            <input
              type="text"
              id="nickName"
              name="nickName"
              value={form.nickName}
              onChange={handleChange}
              placeholder="닉네임 입력 (2-8자)"
            />
            <button
              type="button"
              className="check-duplicate"
              onClick={() => handleCheckDuplicate('nickName')}
            >
              중복확인
            </button>
          </div>
          {errors.nickName && <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.nickName}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="비밀번호 입력 (10-20자)"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">비밀번호 확인</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="비밀번호 재입력"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="이름을 입력해주세요"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일 주소</label>
          <div className="email-input">
            <input
              type="text"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="이메일 주소"
            />
            <select id="emailDomain" name="emailDomain" value={form.emailDomain} onChange={handleChange}>
              {emailDomains.map((domain) => (
                <option key={domain} value={domain}>
                  {domain}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="button-group">
          <button type="submit">가입하기</button>
          <button type="button" onClick={handleCancel}>가입취소</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
