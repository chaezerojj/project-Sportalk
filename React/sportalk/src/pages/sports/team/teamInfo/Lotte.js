import React from 'react';
import { Link } from 'react-router-dom';
import './Lotte.css';

const Lotte = () => {
  return (
    <div className="stadium-container">
      <header className="main-header">
        <h1 className="header-title">소개</h1>
        <p className="header-description">롯데자이언츠 소개입니다.</p>
      </header>

      <section className="main-content">
        <div className="center-column">
          <div className="center-content">
            <h2>가족과 함께하는</h2>
            <h1 className="main-title">사직야구장</h1>
            <div className="info">
              <p><strong>위치:</strong> 부산광역시 동래구 사직로 45</p>
              <p><strong>면적:</strong> 총 면적: 50,301㎡</p>
              <p><strong>시설:</strong> 관람석 22,754석</p>
              <p><strong>오시는길:</strong>&nbsp;🚌버스 : 10, 44, 50, 57, 80, 111, 131, 189, 1002(심야)</p>
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚌마을버스 : 17</p>              
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚇지하철 : 사직역 - 부산 3호선 사직역 1번 출구</p>
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚇지하철 : 종합운동장역 - 3호선 종합운동장역 11번 출구</p>
              <br></br>
            </div>
          </div>
        </div>
        <div className="center-column">
          <img src={`${process.env.PUBLIC_URL}/images/Lottest.png`} alt="사직야구장" className="stadium-image" />
        </div>
        <div className="center-column">
          <img src={`${process.env.PUBLIC_URL}/images/slogan1.png`} alt="슬로건" className="stadium-image" />
        </div>
      </section>
      <section className="description">
        <h2>한국 프로야구를 대표하는 명문구단</h2>
        <p>1982년은 한국프로야구가 출범한 원년이며,
          롯데자이언츠는 1975년 실업야구 창단이래로 1982년 프로야구단으로
          전환하면서 지금까지 팀명과 연고지, 모그룹이 바뀌지 않는 가장 전통이 있는 명문 구단입니다.</p>
        <p>1984년과 1992년 두 차례 한국시리즈 우승을 차지하였고, 리그를 선도하는 우승팀이 되기 위하여
          선수단 전체가 하나되어 매경기 최선을 다하는 모습을 보여드리고 있습니다.</p>
        
        <h2>팬과 함께하는 프로야구 최고의 인기구단</h2>
        <p>롯데자이언츠는 대한민국 최고의 인기 스포츠구단으로 연고지 부산은 야구의 도시 '구도(球都)'라 불립니다.</p>
        <p>1991년 한국프로야구 최초로 한 시즌 100만 관중 입장을 달성했고
          2009년에는 단일시즌 역대 최다관중 기록에 해당하는 1,380,018명이 야구장을 찾았습니다.</p>
        <p>최고의 열정을 자랑하는 롯데자이언츠 팬들은
          독특한 응원과 매너로 한국프로야구 관중문화를 선도하고 있으며 선수들의 자부심이 되어주고 있습니다.</p>
        <p>선수단과 프런트는 팬들의 사랑에 좋은 경기력으로 보답하기 위해 매 경기 최선을 다하고 있으며,
          더욱 다양한 볼거리와 즐거운 경험을 제공하고자 노력하고 있습니다.</p>
        
        <h2>개요</h2>
        <p>롯데그룹이 운영하는 KBO 리그 소속 프로 야구단. 
          연고지는 부산광역시이며 홈구장은 동래구 사직동에 위치한 사직 야구장이다.</p>
        <p>KBO 리그의 대표적인 인기 구단 중 하나이자 
          삼성 라이온즈와 함께 한국프로야구 원년부터 연고지 · 모기업 · 구단명 모두 변하지 않고 명맥을 이어온 유이(唯二)한 구단이다. 
          한국실업야구 롯데 자이언트 시절을 포함한다면 KBO 리그 구단 중 가장 오랜 역사를 자랑한다.</p>
        <p>하지만 긴 역사와 전통에 비해 성적은 신통찮은 편인데, 
          마지막 한국시리즈 우승으로부터 만 31년이 지나 현재까지 가장 오랫동안 한국시리즈 우승을 경험하지 못하고 있는 구단이며 
          프로 원년 구단 중 우승 횟수가 가장 적다. 
          또한 현존하는 KBO 리그 구단 중 키움 히어로즈와 더불어 단일 리그 페넌트 레이스 우승 경험이 없는 유이한 구단이고, 
          구단 역사상 최하위를 총 9회 기록하여 한화 이글스와 함께 공동 최다 기록을 보유하고 있다.</p>
        <p>모기업이 같은 일본프로야구의 치바 롯데 마린즈와는 자매구단 관계다. 
          구단 상징은 초창기엔 자이언츠라는 구단명에 걸맞게 거인이었으나 
          2004년 이후 해양도시인 연고지와 어울리며 치바 롯데 마린즈의 상징과도 동일한 갈매기를 주로 사용하고 있다.</p>
          <br></br>
          <br></br>
          <br></br>
      </section>
    </div>
  );
};

export default Lotte;
