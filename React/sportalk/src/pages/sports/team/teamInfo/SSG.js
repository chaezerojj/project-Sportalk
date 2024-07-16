import React from 'react';
import { Link } from 'react-router-dom';
import './SSG.css';

const SSG = () => {
  return (
    <div className="stadium-container">
      <header className="main-header">
        <h1 className="header-title">소개</h1>
        <p className="header-description">SSG랜더스 소개입니다.</p>
      </header>

      <section className="main-content">
        <div className="center-column">
          <div className="center-content">
            <h2></h2>
            <h1 className="main-title">인천 SSG랜더스필드</h1>
            <div className="info">
              <p><strong>위치:</strong> 인천광역시 미추홀구 매소홀로 618 (문학동)</p>
              <p><strong>면적:</strong> 총 면적: 41,901㎡</p>
              <p><strong>시설:</strong> 관람석 23,000석</p>
              <p><strong>오시는길:</strong>&nbsp;🚌버스 : 문학경기장 [북문쪽] : 4, 5, 11, 27, 46, 82, 111-2, 515번</p>
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚌버스 : 문학경기장(박태환수영장) [동문쪽] : 63, 754, 780-2, 522, 523, 303번</p>              
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚇지하철 : 문학경기장역 - 인천1호선 2번 출구</p>
              <br></br>
            </div>
          </div>
        </div>
        <div className="center-column">
          <img src={`${process.env.PUBLIC_URL}/SSGst.png`} alt="SSG랜더스필드" className="stadium-image" />
        </div>
        <div className="center-column">
          <img src={`${process.env.PUBLIC_URL}/slogan6.png`} alt="슬로건" className="stadium-image" />
        </div>
      </section>
      <section className="description">
        <h2>개요</h2>
        <p>SSG 랜더스(SSG Landers)는 SK 와이번스를 인수하여 
            대한민국 인천광역시를 연고지로 하는 KBO 소속 프로야구단으로 신세계그룹의 계열사이다.
            2020 시즌 후 신세계그룹이 SK 와이번스 야구단을 인수, SSG 랜더스로 변경되었다.</p>
        <p>대한민국의 인천광역시 미추홀구 문학동에 위치한 인천문학경기장 내의 야구장으로, 
            KBO 리그 SSG 랜더스의 홈구장이다.</p>
        <p>한국의 다른 공공체육시설과 마찬가지로 해당 지역의 지자체인 인천광역시에서 시설의 운영/관리권을 갖고 있었으나
            문학박태환수영장을 뺀 인천문학경기장 전체를 2014년부터 5년간 SK 와이번스가 위탁 운영하게 되었다.
            2021년 신세계그룹이 SK 와이번스를 인수할 때 SK의 자산과 각종 권리를 전부 승계하여 경기장 위탁 운영권도 SSG 랜더스로 승계됐다. 
            SSG의 위탁 운영기간은 2023년까지다.</p>
        <h2>sk와이번즈</h2>
        <p>SK텔레콤이 운영하고 2020 시즌까지 존재했던 KBO 리그의 프로야구단으로 
            SSG 랜더스의 전신. 연고지는 인천광역시. 홈구장은 미추홀구 문학동에 위치한 인천SK행복드림구장이다.</p>
        <p>2000년 3월에 창단했으며 2020년 기준 창단 20주년을 맞이했었다. 
            2018년에 창단 19년차에 접어들면서 
            1982년부터 1999년까지 18년간 인천에 있었던 삼청태현을 제치고 인천에 가장 오래 연고를 둔 프로야구단이 되었다.
            모기업은 SK, 구단주는 최창원.[13]</p>
        <p>21년의 역사 중에 12번의 포스트시즌 진출과 8번의 한국시리즈 진출,
            4번의 한국시리즈 우승을 달성한 KBO 리그의 신흥 강호 구단으로 
            역대 한국시리즈 승률 3위와 KBO 포스트시즌 승률 2위 및 6년 연속 KBO 한국시리즈 진출 등 가을 야구에 강한 모습을 보여주었다.</p>
        <p>여담으로 와이번(wyvern)은 서양 문화에 등장하는 비룡으로 몸에 날개가 달려 있고 화살촉 모양의 꼬리가 달렸다고 한다. 
            과거 MBC 청룡의 마스코트였던 동양 문화 속의 상상 동물 용과는 다소 다르다. 
            여기저기서 상징으로 널리 쓰이는 드래곤, 용에 비해 판타지 장르가 아니면 잘 등장하지 않아서 인지도는 낮은 편. 
            미국인 중에도 이 단어를 모르는 이들이 꽤 많았는데 2020년 코로나바이러스감염증-19 대유행으로 인해 
            메이저 리그 베이스볼(MLB) 개막이 지연되고 그에 대한 대체재로 KBO 리그가 미국으로 생중계될 때 
            '와이번스'라는 구단 이름이 알려지자 저 단어는 생소해서 무슨 뜻이냐고 묻는 반응이 많았다.</p>
          <br></br>
          <br></br>
          <br></br>
      </section>
    </div>
  );
};

export default SSG;
