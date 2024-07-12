import React, { useContext, useState } from 'react';
import AuthContext from './AuthContext';

// 인증상태를 관리하는 context 제공 - 인증에 관련된 데이터 변경 가능함
const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userId, setUserId] = useState(null);
	
  const login = (id) => {
    setIsLoggedIn(true);
    setUserId(id);
  }

  const logout = (id) => {
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