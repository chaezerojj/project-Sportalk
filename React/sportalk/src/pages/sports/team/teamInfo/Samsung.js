import React from 'react';
import { Link } from 'react-router-dom';
import './Samsung.css';

const Samsung = () => {
  return (
    <div className="stadium-container">
      <header className="main-header">
        <h1 className="header-title">소개</h1>
        <p className="header-description">삼성라이온즈 소개입니다.</p>
      </header>

      <section className="main-content">
        <div className="center-column">
          <div className="center-content">
            <h2></h2>
            <h1 className="main-title">대구 삼성 라이온즈 파크</h1>
            <div className="info">
              <p><strong>위치:</strong> 대구광역시 수성구 야구전설로 1</p>
              <p><strong>면적:</strong> 총 면적: 15,868㎡</p>
              <p><strong>시설:</strong> 관람석 24,000석</p>
              <p><strong>오시는길:</strong>&nbsp;🚌버스 : 100·100-1·309·349·399·449·509·609·649</p>
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚌버스 : 724·840·849-1·909·937·939·990·991·수성3번</p>              
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚇지하철 : 2호선 대공원역에서 하차하여 5번 출구</p>
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚇지하철 : 2호선 연호역에서 하차하여 3번 출구</p>
              <br></br>
            </div>
          </div>
        </div>
        <div className="center-column">
          <img src={`${process.env.PUBLIC_URL}/images/samsungst.png`} alt="대구 삼성 라이온즈 파크" className="stadium-image" />
        </div>
        <div className="center-column">
          <img src={`${process.env.PUBLIC_URL}/images/slogan3.png`} alt="슬로건" className="stadium-image" />
        </div>
      </section>
      <section className="description">
        <br></br>
        <h2>개요</h2>
            <p>삼성그룹의 계열사인 제일기획이 운영하는 KBO 리그 소속 프로 야구단. 
                1982년 한국프로야구 출범 당시부터 명맥을 이어오고 있는 원년 구단 중 하나이며 연고지는 대구광역시다.
                홈구장은 1982년부터 2015년까지 북구 고성동에 위치한 대구시민운동장 야구장을 사용했으나 
                2016년 수성구 연호동의 대구 삼성 라이온즈 파크로 이전하였다.</p>
            <p>KBO 리그 원년 구단 중 롯데 자이언츠와 함께 연고지 · 모기업 · 구단명이 바뀌지 않은 유이(唯二)한 구단이다.
                통산 최다 승리, 통산 최고 승률, 한국시리즈 최다 진출(17회), 한국시리즈 최다 연속 우승(4년 연속, 2011~2014),
                페넌트 레이스 최다 우승(9회), 페넌트 레이스 최다 연속 우승(5년 연속, 2011~2015), 포스트시즌 최다 진출(29회), 
                포스트시즌 최다 연속 진출(12년 연속, 1997~2008) 등 수많은 기록을 보유하고 있으며 
                리그에서 유일하게 최하위를 기록한 적이 없는 구단이다.</p>
            <p>KBO 리그에서 공식적으로 우승을 8회 차지해 KIA 타이거즈(11회)에 이은 2위에 올라있다. 
                2010년대 초반에는 5년 연속 페넌트 레이스 우승(2011~2015)과 4년 연속 통합우승(2011~2014)을 달성해 
                언론과 야구 팬들로부터 '삼성 왕조'라는 칭호를 얻기도 했다.</p>
            <p>상징 색은 파란색이며 과거에는 빨간색(1982~1983, 2016~2023)이나 노란색(1984~1994)도 사용되었다.
                상징 동물은 라이온즈(lions)라는 팀명에 걸맞게 사자로, 마스코트도 이를 의인화한 블레오다.</p>
                <br></br>
                <br></br>
                <br></br>
      </section>
    </div>
  );
};

export default Samsung;
