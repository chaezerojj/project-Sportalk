import React from 'react';
import { Link } from 'react-router-dom';
import './Hanhwa.css';

const Hanhwa = () => {
  return (
    <div className="stadium-container">
      <header className="main-header">
        <h1 className="header-title">소개</h1>
        <p className="header-description">한화이글스 소개입니다.</p>
      </header>

      <section className="main-content">
        <div className="center-column">
          <div className="center-content">
            <h2></h2>
            <h1 className="main-title">한화생명 이글스 파크</h1>
            <div className="info">
              <p><strong>위치:</strong> 대전광역시 중구 대종로 373 (부사동)</p>
              <p><strong>면적:</strong> 총 면적: 11,385㎡</p>
              <p><strong>시설:</strong> 관람석 13,000석</p>
              <p><strong>오시는길:</strong>&nbsp;🚌버스 : 한화생명이글스파크 119, 802</p>
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚌버스 : 한밭종합운동장 4, 513, 604, 52</p>              
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚇지하철 : 대전역에서 4번 승차 → 한밭종합운동장 하차</p>
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚇지하철 : 서대전역네거리에서 119번 승차 → 보문오거리 하차</p>
              <br></br>
            </div>
          </div>
        </div>
        <div className="center-column">
          <img src={`${process.env.PUBLIC_URL}/Hanhwast.png`} alt="한화생명 이글스 파크" className="stadium-image" />
        </div>
        <div className="center-column">
          <img src={`${process.env.PUBLIC_URL}/slogan9.png`} alt="슬로건" className="stadium-image" />
        </div>
      </section>
      <section className="description">
        <h2>한화이글스는 충청권을 연고로 1985년 한국 프로 야구(KBO)의 제7구단으로 출범했습니다.</h2>
        <p>대전광역시 중구 부사동에 위치한 대전 한화생명 EAGLESPARK를 홈 구장으로 이용하고 있으며, 
            제2구장은 충청북도 청주시 서원구 사직동에 위치한 청주야구장입니다.</p>
        <p>보다 많은 분들이 야구를 관람하며 행복을 느낄 수 있도록 한화이글스는 투혼을 담은 경기를 위해 최선을 다하고 있습니다. 
            지속적인 강팀으로 발돋움 하고자 
            내부 육성 시스템을 정비, 중장기 계획을 바탕으로 한화이글스의 감독 및 코칭 스태프, 선수, 프런트 모두가 함께 노력하고 있습니다.</p>
        <h2>개요</h2>
        <p>한화그룹이 운영하는 KBO 리그의 프로 야구단. 
            1986년 3월 8일 빙그레 이글스라는 구단명으로 창단했으며 1993년 11월 1일 명칭이 현재 명칭인 한화 이글스로 변경되었다. 
            연고지는 대전광역시를 비롯한 충청도이며 홈구장은 중구 부사동에 위치한 대전 한화생명 이글스파크이다.
            제2구장으로 청주종합운동장 야구장을 사용 중이며, 2군은 서산 야구장을 사용하는 중이다.</p>
          <br></br>
          <br></br>
          <br></br>
      </section>
    </div>
  );
};

export default Hanhwa;
