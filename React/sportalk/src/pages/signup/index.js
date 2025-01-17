import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const API_BASE_URL = "http://localhost:8000/api/auth";

function Signup() {
  const [form, setForm] = useState({
    userId: "",
    password: "",
    confirmPassword: "",
    nickName: "",
    name: "",
    email: "",
    emailDomain: "@naver.com",
  });

  const [errors, setErrors] = useState({
    userId: "",
    nickName: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "userId") {
      await checkUserIdDuplicate(value);
    }

    if (name === "nickName") {
      await checkNicknameDuplicate(value);
    }

    if (name === "password") {
      checkPassword(value);
    }

    if (name === "confirmPassword") {
      validateConfirmPassword(value);
    }
  };

  const checkUserIdDuplicate = async (userId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/userId`, {
        params: { userId },
      });
      if (response.data) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          userid: "아이디 중복",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          userid: "",
        }));
        alert("사용 가능한 아이디입니다.");
      }
    } catch (error) {
      console.error("Error checking userId: ", error);
    }
  };

  const checkNicknameDuplicate = async (nickName) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/nickName`, {
        params: { nickName },
      });
      if (response.data) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          nickname: "닉네임 중복",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          nickname: "",
        }));
        alert("사용 가능한 닉네임입니다.");
      }
    } catch (error) {
      console.error("Error checking nickName: ", error);
    }
  };

  const checkPassword = async (password) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/password`, {
        params: { password },
      });
      if (!response.data) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "비밀번호는 10자 이상 20자 이하로 입력해주세요.",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "",
        }));
      }
    } catch (error) {
      console.error("Error checking password: ", error);
    }
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (confirmPassword !== form.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "비밀번호가 일치하지 않습니다.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      userId,
      password,
      confirmPassword,
      nickName,
      name,
      email,
      emailDomain,
    } = form;

    if (
      userId.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === "" ||
      nickName.trim() === "" ||
      name.trim() === "" ||
      email.trim() === ""
    ) {
      alert("빈 칸을 모두 작성해주세요");
      return;
    }

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }

    if (
      errors.userId !== "" ||
      errors.nickName !== "" ||
      errors.password !== "" ||
      errors.confirmPassword !== ""
    ) {
      alert("회원가입 양식을 올바르게 작성해주세요.");
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/signup`, {
        userId,
        password,
        nickName,
        name,
        email: `${email}${emailDomain}`,
      }, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      });
      console.log("회원가입 성공:", response.data);
      alert("회원가입 되었습니다");
      navigate("/sportalk/login");
    } catch (error) {
      console.error("회원가입 실패:", error);
      alert("회원가입에 실패했습니다.");
    }
  };

  const handleCancel = () => {
    alert("회원가입이 취소되었습니다");
    navigate("/");
  };

  const emailDomains = [
    "@naver.com",
    "@gmail.com",
    "@daum.net",
    "@hanmail.net",
    "@yahoo.com",
  ];
  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form" method="POST">
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
              onClick={() => checkUserIdDuplicate(form.userId)}
            >
              중복확인
            </button>
          </div>
          {errors.userId && (
            <p style={{ color: "red", fontSize: "0.8em", marginTop: "5px" }}>
              {errors.userId}
            </p>
          )}
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
              onClick={() => checkNicknameDuplicate(form.nickName)}
            >
              중복확인
            </button>
          </div>
          {errors.nickName && (
            <p style={{ color: "red", fontSize: "0.8em", marginTop: "5px" }}>
              {errors.nickName}
            </p>
          )}
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
          {errors.password && (
            <p style={{ color: "red", fontSize: "0.8em", marginTop: "5px" }}>
              {errors.password}
            </p>
          )}
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
          {errors.confirmPassword && (
            <p style={{ color: "red", fontSize: "0.8em", marginTop: "5px" }}>
              {errors.confirmPassword}
            </p>
          )}
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
            <select
              id="emailDomain"
              name="emailDomain"
              value={form.emailDomain}
              onChange={handleChange}
            >
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
          <button type="button" onClick={handleCancel}>
            가입취소
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
