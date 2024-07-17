import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider.js";
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";

import Home from "./pages/home/index.js";
import Board from "./pages/board/index.js";
import Login from "./pages/login/index.js";
import SignUp from "./pages/signup/index.js";
import MyPage from "./pages/myPage/index.js";
import BoardDetail from "./components/boardDetail/boardDetail.js";
import CreateBoard from "./components/boardDetail/createBoard.js";
import EditBoardPage from "./components/boardDetail/editBoardPage.js";
import BaseballRank from "./pages/sports/rank/index.js";
import Calendar from "./pages/sports/calendar/index.js";
import Team from "./pages/sports/team/index.js";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          {/* 헤더 네비바 */}
          <Header />
          <Routes>
            <Route path="/sportalk" element={<Home />} />
            <Route path="/sportalk/board" element={<Board />} />
            <Route path="/sportalk/board/:id" element={<BoardDetail />} />
            <Route
              path="/sportalk/board/:id/edit"
              element={<EditBoardPage />}
            />
            <Route path="/sportalk/board/create" element={<CreateBoard />} />
            <Route path="/sportalk/login" element={<Login />} />
            <Route path="/sportalk/signup" element={<SignUp />} />
            <Route path="/sportalk/mypage/*" element={<MyPage />} />
            <Route path="/sportalk/rank" element={<BaseballRank />} />
            <Route path="/sportalk/calendar" element={<Calendar />} />
            <Route path="/sportalk/team/*" element={<Team />} />
          </Routes>
          {/* 푸터 */}
          <Footer />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
