import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import * as S from "./index.Style";
import TeamCategory from "../../../components/teamCategory";
import Doosan from "./teamInfo/Doosan";
import Hanhwa from "./teamInfo/Hanhwa";
import Kia from "./teamInfo/Kia";
import Kiwoom from "./teamInfo/Kiwoom";
import LG from "./teamInfo/LG";
import Lotte from "./teamInfo/Lotte";
import NC from "./teamInfo/NC";
import Samsung from "./teamInfo/Samsung";
import SSG from "./teamInfo/SSG";
import KT from './teamInfo/KT';

function Index() {
  return (
    <S.Wrapper>
      <S.Title>KBO 야구 구단</S.Title>
      <TeamCategory />
      <Routes>
        <Route path='/doosan' element={<Doosan />}/>
        <Route path='/hanhwa' element={<Hanhwa />}/>
        <Route path='/kia' element={<Kia />}/>
        <Route path='/kiwoom' element={<Kiwoom />}/>
        <Route path='/kt' element={<KT />}/>
        <Route path='/lg' element={<LG />}/>
        <Route path='/lotte' element={<Lotte />}/>
        <Route path='/nc' element={<NC />}/>
        <Route path='/samsung' element={<Samsung />}/>
        <Route path='/ssg' element={<SSG />}/>
      </Routes>
    </S.Wrapper>
  )
}

export default Index;