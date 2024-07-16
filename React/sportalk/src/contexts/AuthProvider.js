import React, { useContext, useState } from 'react';
import AuthContext from './AuthContext';
import axiosInstance from '../api';

// 인증상태를 관리하는 context 제공 - 인증에 관련된 데이터 변경 가능함
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userId, setUserId] = useState(2);

  const user = [{
    id: 1,
    nickName: "minion",
    userName: "권민현",
    email: "rnjsalsgus06@naver.com",
    password: "1234",
    userId: "jess06"
  },
  {
    id: 2,
    nickName: "테스트닉네임",
    userName: "김시험",
    email: "test2@gmail.com",
    password: "testpw2",
    userId: "test2"
  },
  ]

  const login = async (formData) => {
    try {
      const response = await axiosInstance.post('/api/auth/login', formData);
      if (response.status === 200) {
        setIsLoggedIn(true);
        setUserId(response.data.userId); // 백엔드에서 반환하는 사용자 ID로 설정
				
      } else {
        // 로그인 실패 처리
        console.error('로그인 실패:', response.data);
      }
    } catch (error) {
      console.error('로그인 요청 실패:', error);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserId(null);
  }


  return (
    <AuthContext.Provider value={{ isLoggedIn, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;