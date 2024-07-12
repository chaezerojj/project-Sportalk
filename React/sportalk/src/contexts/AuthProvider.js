import React, { useContext, useState } from 'react';
import AuthContext from './AuthContext';

// 인증상태를 관리하는 context 제공 - 인증에 관련된 데이터 변경 가능함
const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
	const [user,setUser]=useState({
		id:1,
		nickName:"minion",
		userName:"권민현",
		email:"rnjsalsgus06@naver.com",
		password:"1234",
		userId:"jess06"
	})
	
  const login = () => {
		setIsLoggedIn(true)
	};
  const logout = () => setIsLoggedIn(false);
	

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
