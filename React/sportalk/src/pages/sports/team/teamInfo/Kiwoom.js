import React from 'react';
import { Link } from 'react-router-dom';
import './Kiwoom.css';

const Kiwoom = () => {
  return (
    <div className="stadium-container">
      <header className="main-header">
        <h1 className="header-title">소개</h1>
        <p className="header-description">키움히어로즈 소개입니다.</p>
      </header>

      <section className="main-content">
        <div className="center-column">
          <div className="center-content">
            <h2></h2>
            <h1 className="main-title">고척 스카이돔</h1>
            <div className="info">
              <p><strong>위치:</strong> 서울특별시 구로구 경인로 430 (고척동)</p>
              <p><strong>면적:</strong> 총 면적: 58,992㎡</p>
              <p><strong>시설:</strong> 관람석 16,000석</p>
              <p><strong>오시는길:</strong>&nbsp;🚌버스(간선,일반) : 600, 662, 660, 160, N16번 / 88, 10, 83, 510, 530번</p>
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚌버스(지선,좌석) : 5626, 5712, 6713, 6515, 6637, 6640A번/301, 320, 5200번</p>              
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚇지하철 : 구일역 1호선 - 2번 출구(가장 가까움)</p>
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚇지하철 : 개봉역, 구로역 1호선 - 2번 출구</p>
              <br></br>
            </div>
          </div>
        </div>
        <div className="center-column">
          <img src={`${process.env.PUBLIC_URL}/images/Kiwoomst.png`} alt="사직야구장" className="stadium-image" />
        </div>
        <div className="center-column">
          <img src={`${process.env.PUBLIC_URL}/images/slogan10.png`} alt="슬로건" className="stadium-image" />
        </div>
      </section>
      <section className="description">
        <h2>팬 여러분의 변함없는 응원과 함께 성장해 가고 있는 히어로즈 프로야구단입니다.</h2>
        <p>2008년 서울을 연고로 창단한 히어로즈 프로야구단은언제나 팬 여러분과 함께였습니다.
            변함없는 열정으로 응원해 주시는 팬 여러분이 계시기에 히어로즈 프로야구단은 매 시즌 조금씩 높은 곳을 바라볼 수 있었습니다.</p>
        
        <h2>최선을 다하는 플레이로 보답하겠습니다.</h2>
        <p>그 동안 우승을 위해 흘렸던 땀과 눈물을 잊지 않겠습니다.
            매 시즌, 조금 더 높은 곳에서 팬 여러분과 함께 기쁨의 눈물을 흘릴 수 있도록 저희 선수단과 임직원 모두는 최선을 다하겠습니다.</p>
        
        <h2>개요</h2>
        <p>(주)서울히어로즈에서 운영하는 KBO 리그 소속 프로 야구단. 연고지는 서울특별시로 LG 트윈스, 두산 베어스와 연고지를 공유한다. 
            홈구장은 구로구 고척동에 위치한 고척 스카이돔으로, 2016 시즌을 앞두고 목동 야구장에서 이전했다.</p>
        <p>2008년 KBO의 열 번째 구단으로 창단했다.
            현대 유니콘스를 해체 후 재창단한 구단으로 유니콘스의 선수단, 프런트, 지명권을 승계하고 출발했다.</p>
        <p>2013년 첫 포스트시즌 진출 이후 한국시리즈 3회(2014, 2019, 2022) 진출을 포함해 
            포스트시즌에 꾸준히 진출하는 강팀으로 거듭났으나, 
            현존하는 KBO 리그 구단 중에서 유일하게 한국시리즈 우승이 없으며 
            동시에 롯데 자이언츠와 더불어 페넌트 레이스 우승이 없는 유이한 구단이기도 하다.</p>
          <br></br>
          <br></br>
          <br></br>
      </section>
    </div>
  );
};

export default Kiwoom;
