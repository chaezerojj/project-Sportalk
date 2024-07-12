import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider.js';
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/home";
import Board from "./pages/board";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import MyPage from "./pages/myPage";
import BoardDetail from "./components/boardDetail/boardDetail.js";
import CreateBoard from "./components/boardDetail/createBoard.js";

function App() {

  return (
    <>

      <Router>
        <AuthProvider>
          {/* 헤더 네비바 */}
          <Header />
          <Routes>
            <Route path="/sportalk" element={<Home />}/>
            <Route path="/sportalk/board" element={<Board />} />
            <Route path="/sportalk/board/:id" element={<BoardDetail />} />
            <Route path="/sportalk/board/create" element={<CreateBoard/>}/>
            <Route path="/sportalk/login" element={<Login />} />
            <Route path="/sportalk/signup" element={<SignUp />} />
            <Route path="/sportalk/mypage/*" element={<MyPage />} />
          </Routes>
          {/* 푸터 */}
          <Footer />
        </AuthProvider>
      </Router>

    </>
  );
}

export default App;
