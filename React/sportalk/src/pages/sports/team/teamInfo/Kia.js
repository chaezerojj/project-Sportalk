import React from 'react';
import { Link } from 'react-router-dom';
import './Kia.css';

const Kia = () => {
  return (
    <div className="stadium-container">
      <header className="main-header">
        <h1 className="header-title">소개</h1>
        <p className="header-description">기아타이거즈 소개입니다.</p>
      </header>

      <section className="main-content">
        <div className="center-column">
          <div className="center-content">
            <h2></h2>
            <h1 className="main-title">광주기아챔피언스필드</h1>
            <div className="info">
              <p><strong>위치:</strong> 광주광역시 북구 서림로 10</p>
              <p><strong>면적:</strong> 총 면적: 57,646㎡</p>
              <p><strong>시설:</strong> 관람석 20,500석</p>
              <p><strong>특징:</strong> 국내 최초 개방형 야구장</p>
              <p><strong>오시는길:</strong>&nbsp;🚌버스 : 광주송정역 정류장 송정98 승차</p>
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚌버스 : 공항역 정류장 일곡38 승차</p>              
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚇지하철 : 광주송정역 ⟶ 농성역 하차 ⟶ 택시 이용</p>
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚇지하철 : 종합운동장역 - 3호선 종합운동장역 11번 출구</p>
              <br></br>
            </div>
          </div>
        </div>
        <div className="center-column">
          <img src={`${process.env.PUBLIC_URL}/Kiast.png`} alt="광주기아챔피언스필드" className="stadium-image" />
        </div>
        <div className="center-column">
          <img src={`${process.env.PUBLIC_URL}/slogan2.png`} alt="슬로건" className="stadium-image" />
        </div>
      </section>
      <section className="description">
        <br></br>
        <h2>개요</h2>
            <p>현대자동차그룹의 계열사인 기아가 운영하는 KBO 리그의 프로 야구단으로 
                연고지는 광주광역시, 홈구장은 광주광역시 북구 임동에 위치한 광주 기아 챔피언스 필드.</p>
            <p>KBO 리그 원년 구단으로 창단 당시에는 구단명이 해태 타이거즈였으며 2001년에 현대·기아자동차그룹이 인수하며 KIA 타이거즈로 변경했다. 
                특히 전무후무한 한국시리즈 통산 11회 진출-11회 우승으로 최다 우승과 무패 기록을 보유하고 있다.</p>
            <p>KBO 리그가 도시 연고제를 채택하고 있기 때문에 
                명목상 연고지는 광주광역시지만 실질적으로는 전라도 전체를 대표하는 구단이다. 
                신인 지명에 있어서도 광주광역시, 전라남도, 전라북도가 타이거즈의 지역 연고 선수 지명지역이다.</p>
            <p>두산 베어스, 삼성 라이온즈, LG 트윈스, 롯데 자이언츠와 마찬가지로 
                KBO 리그 원년부터 참가한 프로야구단 중 하나이며, 구단의 심볼은 호랑이이다. 
                창단 당시부터 2013년까지 무등 야구장을 홈구장으로 사용하다가 2014년부터는 광주-기아 챔피언스 필드를 홈구장으로 사용하고 있다.</p>
                <br></br>
                <br></br>
                <br></br>
      </section>
    </div>
  );
};

export default Kia;
