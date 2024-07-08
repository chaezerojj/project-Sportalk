import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";

import Board from "./pages/board";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import MyPage from "./pages/myPage";

function App() {

  return (
    <>

      <Router>
        {/* 헤더 네비바 */}
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />}/> */}
          <Route path="/sportalk/board" element={<Board />} />
          <Route path="/sportalk/login" element={<Login />} />
          <Route path="/sportalk/signup" element={<SignUp />} />
          <Route path="/sportalk/mypage" element={<MyPage />} />
        </Routes>
        {/* 푸터 */}
        <Footer />
      </Router>

    </>
  );
}

export default App;
