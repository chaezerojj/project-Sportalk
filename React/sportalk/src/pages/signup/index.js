import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Index() {
  const [form, setForm] = useState({
    userId: '',
    password: '',
    confirmPassword: '',
    nickName: '',
    name: '',
    phoneNumber: '',
    email: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
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

    if (name === 'userId' && value.length < 6) {
      setErrors({ ...errors, userId: '' });
    } else {
      setErrors({ ...errors, userId: '' });
    }

    if (name === 'nickName' && value.length < 2) {
      setErrors({ ...errors, nickName: '' });
    } else {
      setErrors({ ...errors, nickName: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.userId.trim() === '' ||
      form.password.trim() === '' ||
      form.confirmPassword.trim() === '' ||
      form.nickName.trim() === '' ||
      form.name.trim() === '' ||
      form.phoneNumber.trim() === '' ||
      form.email.trim() === '' ||
      form.birthYear.trim() === '' ||
      form.birthMonth.trim() === '' ||
      form.birthDay.trim() === ''
    ) {
      alert('빈 칸을 모두 작성해주세요');
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }

    console.log(form);
    alert('회원가입되었습니다');
    navigate('/sportalk/login');
  };

  const handleCancel = () => {
    alert('취소되었습니다');
    navigate('/');
  };

  const handleCheckDuplicate = (field) => {
    let value = form[field].trim();
    if (value === '') {
      alert(`${field === 'userId' ? '아이디' : '닉네임'}를 입력해주세요`);
      return;
    }
    if (field === 'userId' && value.length < 6) {
      alert('아이디는 6자 이상이어야 합니다');
      return;
    }
    if (field === 'nickName' && value.length < 2) {
      alert('닉네임은 2자 이상이어야 합니다');
      return;
    }

    console.log(`'${value}'를 확인 중입니다...`);
    const isDuplicate = false; // 여기에 중복 확인 로직을 추가합니다.

    if (isDuplicate) {
      alert(`'${value}'는 이미 사용 중입니다. 다른 ${field === 'userId' ? '아이디' : '닉네임'}를 입력해주세요.`);
    } else {
      alert(`'${value}'는 사용 가능한 ${field === 'userId' ? '아이디' : '닉네임'}입니다.`);
    }
  };

  const emailDomains = ['@naver.com', '@gmail.com', '@daum.net', '@hanmail.net', '@yahoo.com'];

  const birthYearOptions = [];
  for (let year = 1950; year <= 2010; year++) {
    birthYearOptions.push(
      <option key={year} value={year}>
        {year}년
      </option>
    );
  }

  const birthMonthOptions = [];
  for (let month = 1; month <= 12; month++) {
    birthMonthOptions.push(
      <option key={month} value={month}>
        {month}월
      </option>
    );
  }

  const birthDayOptions = [];
  for (let day = 1; day <= 31; day++) {
    birthDayOptions.push(
      <option key={day} value={day}>
        {day}일
      </option>
    );
  }

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
          <label htmlFor="phoneNumber">전화번호</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            placeholder="휴대폰 번호 입력 ('-' 제외 11자리 입력)"
            maxLength={11} // 전화번호 입력 길이를 제한합니다.
          />
          {form.phoneNumber.length > 0 && form.phoneNumber.length < 11 && (
            <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>
              전화번호는 11자입니다.
            </p>
          )}
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
        <div className="form-group">
          <label>생년월일</label>
          <div className="birthdate-input">
            <select name="birthYear" value={form.birthYear} onChange={handleChange}>
              <option value="">년도</option>
              {birthYearOptions}
            </select>
            <select name="birthMonth" value={form.birthMonth} onChange={handleChange}>
              <option value="">월</option>
              {birthMonthOptions}
            </select>
            <select name="birthDay" value={form.birthDay} onChange={handleChange}>
              <option value="">일</option>
              {birthDayOptions}
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

export default Index;
