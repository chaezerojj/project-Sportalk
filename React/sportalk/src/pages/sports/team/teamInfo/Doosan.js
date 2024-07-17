import React from "react";
import { Link } from "react-router-dom";
import "./Doosan.css";

const Doosan = () => {
  return (
    <div className="stadium-container">
      <header className="main-header">
        <h1 className="header-title">소개</h1>
        <p className="header-description">두산베이스 소개입니다.</p>
      </header>

      <section className="main-content">
        <div className="center-column">
          <div className="center-content">
            <h2></h2>
            <h1 className="main-title">잠실야구장</h1>
            <div className="info">
              <p>
                <strong>위치:</strong> 서울특별시 송파구 올림픽로 25 (잠실동)
              </p>
              <p>
                <strong>면적:</strong> 총 면적: 59,500㎡
              </p>
              <p>
                <strong>시설:</strong> 관람석 23,750석
              </p>
              <p>
                <strong>오시는길:</strong>&nbsp;🚌버스 : 버스보단 지하철 추천!
              </p>
              <p>
                <strong></strong>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                🚇지하철 : 서울역 ⟶ 동작역 ⟶(환승)⟶ 종합운동장역(9호선)
              </p>
              <p>
                <strong></strong>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                🚇지하철 : 고속터미널 ⟶ 종합운동장역(9호선)
              </p>
              <br></br>
            </div>
          </div>
        </div>
        <div className="center-column">
          <img
            src={`${process.env.PUBLIC_URL}/images/LGst.png`}
            alt="잠실야구장"
            className="stadium-image"
          />
        </div>
        <div className="center-column">
          <img
            src={`${process.env.PUBLIC_URL}/images/slogan5.png`}
            alt="슬로건"
            className="stadium-image"
          />
        </div>
      </section>
      <section className="description">
        <h2>개요</h2>
        <p>
          두산그룹이 운영하는 KBO 리그의 프로 야구단. 연고지는 서울특별시이며
          홈구장은 송파구 잠실동에 위치한 서울종합운동장 야구장을 LG 트윈스와
          공동으로 사용하고 있다. 서울을 연고지로 삼는 3개의 프로 야구단 중 한
          곳이다. 실업계를 합한 창단 자체는 1975년에 아마추어 팀으로 창단한 롯데
          자이언츠가 먼저이지만 원년 6개 구단 가운데 가장 먼저 프로야구단으로서
          창단식을 가진 원년 최초 구단이다.
        </p>
        <p>
          삼성 라이온즈, 롯데 자이언츠 등과 마찬가지로 KBO 리그 원년에 창단한
          프로 야구단 중 하나로 두산프로야구단 OB 베어스가 1982년 창단 당시의
          구단명이었다.
        </p>
        <p>
          창단 당시의 연고지는 대전시를 포함한 충청남북도 였으나, 이미 창단 3년
          후 서울로 연고지를 변경한다는 조건을 걸고 창단을 했었기 때문에 3년 후
          서울로 연고지를 이전했으며 이전 직후인 1985년엔 서울 동대문야구장을
          주로 홈구장으로 사용하다가 1986년부터 서울종합운동장 야구장을
          홈구장으로 사용하고 있다. 마스코트는 구단 이름에서 보듯 곰이다.
        </p>
        <p>
          또한 KBO 리그의 최초 창단 구단이자 동시에 원년 우승이라는 타이틀을
          보유하고 있고, 역대 우승 연도는 1982년, 1995년, 2001년, 2015년,
          2016년, 2019년으로 총 6회이며, 준우승은 2000년, 2005년, 2007년,
          2008년, 2013년, 2017년, 2018년, 2020년, 2021년으로 총 9회이다.
        </p>
        <h2>한 지붕 두 가족</h2>
        <p>
          1982년 3월 27일 원년 첫 경기부터 동대문야구장을 홈으로 써왔던 MBC
          청룡이 1982 세계야구선수권대회가 끝나자 페넌트레이스 도중에
          서울종합운동장 야구장으로 홈구장을 옮겼으며, 1985년 OB 베어스가
          충청도에서 서울로 연고지를 이전했다. OB 역시 창단 과정에서 MBC 등 다른
          5개 구단의 공증 하에 3년 후 서울 입성이 보장되어 있었기 때문이다. 당시
          서울 쿼터의 선수 수급을 요구한 것도 이러한 맥락에서였다. OB는
          동대문야구장을 사용하다 1986년부터 1988년까지 3년 동안 서울종합운동장
          야구장을 MBC와 같이 사용하게 되었다. 그런데 1988년 이후에도 아마야구의
          텃세에 OB가 결국 잠실 야구장에 눌러앉았고, 이 때문에 서울종합운동장
          야구장은 대한민국에서 유일하게 두 구단이 같이 홈으로 사용하는 야구장이
          되었다. 그리고 이 구장을 같이 홈으로 쓰는 두 팀간의 시리즈인
          잠실시리즈가 만들어졌다. 현재도 KBO 리그 최고의 흥행 카드다.
        </p>
        <br></br>
        <br></br>
        <br></br>
      </section>
    </div>
  );
};

export default Doosan;
