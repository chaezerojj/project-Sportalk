import React from 'react';
import { Link } from 'react-router-dom';
import './NC.css';

const NC = () => {
  return (
    <div className="stadium-container">
      <header className="main-header">
        <h1 className="header-title">소개</h1>
        <p className="header-description">NC다이노스 소개입니다.</p>
      </header>

      <section className="main-content">
        <div className="center-column">
          <div className="center-content">
            <h2></h2>
            <h1 className="main-title">창원NC파크</h1>
            <div className="info">
              <p><strong>위치:</strong> 경남 창원시 마산회원구 삼호로 63</p>
              <p><strong>면적:</strong> 총 면적: 48,269㎡</p>
              <p><strong>시설:</strong> 관람석 17,891석</p>
              <p><strong>오시는길:</strong>&nbsp;🚌버스(간선) : 100,102,106,107,108,109,114,116,160,163,164</p>
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚌버스(읍면) : 53,46,49,70,20,21,22,23,60,61,62,64,65</p>              
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚇지하철 : 지하철 X</p>
              <br></br>
            </div>
          </div>
        </div>
        <div className="center-column">
          <img src={`${process.env.PUBLIC_URL}/images/NCst.png`} alt="창원NC파크" className="stadium-image" />
        </div>
        <div className="center-column">
          <img src={`${process.env.PUBLIC_URL}/images/slogan7.png`} alt="슬로건" className="stadium-image" />
        </div>
      </section>
      <section className="description">
        <h2>개요</h2>
        <p>엔씨소프트에서 운영하는 KBO 리그의 프로 야구단. 
            연고지는 경상남도 창원시이며 홈구장은 마산회원구 양덕동에 위치한 창원 NC 파크다.
            2012년까지의 8구단 체제를 깨고 9구단 체제를 연 주역으로
            창단 직후인 2012년 시즌에는 과도기로서 KBO 퓨처스리그에 참가했고 해당 시즌 퓨처스리그 우승 후 
            2013년 시즌부터 본격적인 1군 페넌트레이스에 참가했다.</p>
        <p>구단주는 엔씨소프트 창업주 겸 대표이사 김택진이다.</p>
        <p>창단 과정에 우여곡절이 정말 많았다. 
            사실 경상남도 창원시 연고 야구단은 1990년에 당시 마산시 3대 향토 기업 중 하나였던 한일합섬의 주도로 창단할 뻔 했지만 
            이런저런 사정이 맞물리면서 마산 연고 야구단의 창단이 무산되었고, 
            이후 21년이 지난 2011년에서야 산고 끝에 통합 창원시 연고의 야구단이 탄생하게 됐다.</p>
        <p>2018년 리그 최하위를 기록하면서 삐걱댔던 시절도 있었으나 
            2013년 1군 진입 이후 7년 만인 2020년 창단 첫 통합 우승을 차지했다.</p>
          <br></br>
          <br></br>
          <br></br>
      </section>
    </div>
  );
};

export default NC;
