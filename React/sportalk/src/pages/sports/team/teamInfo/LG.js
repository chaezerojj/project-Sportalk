import React from 'react';
import { Link } from 'react-router-dom';
import './LG.css';

const LG = () => {
  return (
    <div className="stadium-container">
      <header className="main-header">
        <h1 className="header-title">소개</h1>
        <p className="header-description">LG트윈스 소개입니다.</p>
      </header>

      <section className="main-content">
        <div className="center-column">
          <div className="center-content">
            <h2></h2>
            <h1 className="main-title">잠실야구장</h1>
            <div className="info">
              <p><strong>위치:</strong> 서울특별시 송파구 올림픽로 25 (잠실동)</p>
              <p><strong>면적:</strong> 총 면적: 59,500㎡</p>
              <p><strong>시설:</strong> 관람석 23,750석</p>
              <p><strong>오시는길:</strong>&nbsp;🚌버스 : 버스보단 지하철 추천!</p>             
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚇지하철 : 서울역 ⟶ 동작역 ⟶(환승)⟶ 종합운동장역(9호선)</p>
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚇지하철 : 고속터미널 ⟶ 종합운동장역(9호선)</p>
              <br></br>
            </div>
          </div>
        </div>
        <div className="center-column">
          <img src={`${process.env.PUBLIC_URL}/LGst.png`} alt="잠실야구장" className="stadium-image" />
        </div>
        <div className="center-column">
          <img src={`${process.env.PUBLIC_URL}/slogan4.png`} alt="슬로건" className="stadium-image" />
        </div>
      </section>
      <section className="description">
        <h2>개요</h2>
        <p>현 KBO 리그 LG 트윈스와 두산 베어스의 홈구장으로 사용되고 있으며 주로 잠실 야구장으로 불리고 있다.</p>
        <h2>상세</h2>
        <p>한때 KBO 리그 1군 구장 중 가장 큰 규모, 대한민국의 수도 서울의 중심부(강남권)에 입지, 
            그리고 1982 세계야구선수권대회나 1999 아시아 야구 선수권 대회 등 많은 국제 경기를 개최하였다. 
            다만 최근에는 고척 스카이돔에서 국제 경기가 치러지는 경우가 많아 이러한 이미지는 많이 퇴색된 상태이다.</p>
        <p>단순 펜스 거리로만 따졌을 때는 메이저 리그 구장들에 비해 비교적 작은 것 같지만, 
            위성사진 등으로 비교해보면 메이저 리그에 내놓아도 가장 큰 규모에 들어갈 정도로 
            일본에서 그라운드가 커서 홈런이 잘 안 나오기로 유명한 반테린 돔 나고야보다 더 크다. 
            국내에서는 펜스 거리가 가장 멀기 때문에 홈런이 가장 적게 나오는 구장이다. 
            더군다나 외야 관중석의 경사가 가파르고 높기 때문에 장외 홈런은 나오기가 극히 힘들어서 
            정규 시즌 장외홈런은 2000년에 두산 베어스 소속 김동주가 롯데 자이언츠 소속 에밀리아노 기론을 상대로 쳐낸 것이 유일했다.
            그런데 2018년 10월 10일 SK 와이번스와의 경기에서 
            김동엽과 제이미 로맥이 같은 이닝에 각각 3점, 2점 홈런을 장외 홈런으로 쳐내서 하루 만에 잠실야구장 장외 홈런 2개가 추가되었다.
            그리고 로맥은 2020년 6월 9일 LG 트윈스의 케이시 켈리를 상대로 장외 홈런을 한 번 더 쳐서
            현재까지 유일하게 잠실 야구장에서 장외 홈런을 두번 친 타자가 되었다. 
            또 다른 특징이라면 한 번은 두산, 한 번은 LG를 상대로 넘겼다는 것이 되겠다.</p>
        <p>이곳은 모든 원정팀의 응원단이 방문한다. 
            단 예전의 키움 히어로즈나 SK, 그리고 코로나 펜데믹 이후의 NC 다이노스의 경우에는 
            평일 경기에 응원단이 방문하지 않은 적이 있다.(넥센 히어로즈는 2011년, SK는 2013년까지) 이런 예외를 빼고 
            타 지방 연고 구단의 팬이 수도권에도 많기 때문에 흥행(관중 수입)을 위해서 응원단이 잠실야구장에 간다. 
            특히 잠실시리즈 또는 KIA, 롯데, 삼성, 한화와의 경기가 잡혀있으면 전체 관중 수에서 홈팀과 원정팀의 숫자가 반으로 갈리는 진풍경이 벌어진다.
            KIA, 롯데, 삼성, 한화의 성적이 좋을 경우 오히려 원정팀 팬들이 더 많은 진풍경을 보이기도 한다. 
            1980년대에도 별반 다르지 않아서 원정팀이 파도타기를 하면 거의 한 바퀴를 돌았다고 한다.</p>
        <p>2022년 프로야구 올스타전이 2011년 이후 11년 만에 이곳에서 열렸다.</p>
        <h2>한 지붕 두 가족</h2>
        <p>1982년 3월 27일 원년 첫 경기부터 동대문야구장을 홈으로 써왔던 MBC 청룡이 1982 세계야구선수권대회가 끝나자 
            페넌트레이스 도중에 서울종합운동장 야구장으로 홈구장을 옮겼으며, 1985년 OB 베어스가 충청도에서 서울로 연고지를 이전했다. 
            OB 역시 창단 과정에서 MBC 등 다른 5개 구단의 공증 하에 3년 후 서울 입성이 보장되어 있었기 때문이다. 
            당시 서울 쿼터의 선수 수급을 요구한 것도 이러한 맥락에서였다. 
            OB는 동대문야구장을 사용하다 1986년부터 1988년까지 3년 동안 서울종합운동장 야구장을 MBC와 같이 사용하게 되었다. 
            그런데 1988년 이후에도 아마야구의 텃세에 OB가 결국 잠실 야구장에 눌러앉았고, 
            이 때문에 서울종합운동장 야구장은 대한민국에서 유일하게 두 구단이 같이 홈으로 사용하는 야구장이 되었다. 
            그리고 이 구장을 같이 홈으로 쓰는 두 팀간의 시리즈인 잠실시리즈가 만들어졌다. 
            현재도 KBO 리그 최고의 흥행 카드다.</p>
          <br></br>
          <br></br>
          <br></br>
      </section>
    </div>
  );
};

export default LG;
