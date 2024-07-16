import React from 'react';
import { Link } from 'react-router-dom';
import './KT.css';

const KT = () => {
  return (
    <div className="stadium-container">
      <header className="main-header">
        <h1 className="header-title">소개</h1>
        <p className="header-description">KT위즈 소개입니다.</p>
      </header>

      <section className="main-content">
        <div className="center-column">
          <div className="center-content">
            <h2></h2>
            <h1 className="main-title">수원 KT위즈파크</h1>
            <div className="info">
              <p><strong>위치:</strong> 경기도 수원시 장안구 경수대로 893 (조원동)</p>
              <p><strong>면적:</strong> 총 면적: 32,000㎡</p>
              <p><strong>시설:</strong> 관람석 18,700석</p>
              <p><strong>오시는길:</strong>&nbsp;🚌버스 : 수원역 - 310, 777, 900</p>
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚌버스 : 성균관대역 - 66-2, 99, 99-2</p>              
              <p><strong></strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              🚇지하철 : 화서역 1호선 + 19번 버스</p>
              <br></br>
            </div>
          </div>
        </div>
        <div className="center-column">
          <img src={`${process.env.PUBLIC_URL}/KTst.png`} alt="KT위즈파크" className="stadium-image" />
        </div>
        <div className="center-column">
          <img src={`${process.env.PUBLIC_URL}/slogan8.png`} alt="슬로건" className="stadium-image" />
        </div>
      </section>
      <section className="description">
        <h2>신비롭고 강력한 힘, 상상의 야구 실현</h2>
            <p>kt wiz는 2013년, 제 10구단에 대한 국민들의 강한 열망, 경기도 및 수원시 
                그리고 KT그룹의 뜨거운 유치 열정으로 비상한 솜씨와 비범한 재능을 가진 마법사,
                wiz라는 이름으로 신비롭고 강력한 힘으로 상상의 야구를 실현하겠다는 의지를 가지고 새롭게 출범하였습니다.</p>
        <h2>명문구단을 위한 철저한 플랜!</h2>
            <p>명문구단이 되기 위한 철저한 중장기 플랜을 통해 kt wiz의 감독 및 코칭 스태프, 선수들을 구성하고 있습니다.
                기존 수원야구장을 대규모로 중축하고 리모델링하여 최적의 야구관람 시설을 갖추었습니다. 
                굵은 땀방울과 함께 전지 훈련을 수행하고 2014년 퓨처스리그에 출전하여 기량을 쌓은 후, 
                2015년 1군 리그에 성공적으로 데뷔하여 야구 팬들에게 kt wiz 이름 그대로 마법과 같은 야구를 펼쳐보이기 위해 노력을 다하고 있습니다.</p>
        <h2>복합 문화공간의 첨단 야구장</h2>
            <p>kt그룹의 우수한 ICT기술을 활용한 ‘빅 테인먼트(BIC Tainment)’ 기술을 적극 활용하여 
                야구를 사랑하는 팬 여러분께 차별화된 야구 콘텐츠를 제공하고 남녀노소 누구나 즐겁고 편하게 야구를 즐길 수 있는
                복합 문화공간의 첨단 야구장을 만들 예정입니다.</p>
        <h2>재미와 즐거움을 추구하는 근성 있는 구단!</h2>
            <p>창단 과정에서 경기도민과 수원시민들이 보내주신 성원과 기대에 보답하기 위해 
                앞으로도 야구를 통한 즐거운 여가 문화를 제공할 것이며 팬들과 함께 할 수 있는 새롭고 다양한 마케팅을 전개해 나가 
                “재미와 즐거움을 추구하는 근성있는 구단”이라는 kt sports의 확고한 비전을 실행하고 다년간 쌓인 스포츠 구단 운영 노하우로
                그라운드 안팎에서 그 동안 없던 새로운 야구를 kt wiz가 이루어 가겠습니다.</p>
        <h2>개요</h2>
            <p>KT가 운영하는 KBO 리그 프로야구단. 
                연고지는 경기도 수원시, 홈구장은 장안구 조원동에 위치한 수원종합운동장 내의 수원 케이티 위즈 파크다.
                2014년 시즌 KBO 퓨처스리그에 참가하고, 2015년 시즌부터 본격적인 1군 페넌트레이스에 참가했다. 
                구단주는 KT 회장인 김영섭이 겸임한다. 대표이사는 이호식이다.</p>
            <p>리그 역사를 통틀어 12번째로 창단된 구단으로, 
                출범 이후 33년 만인 2015년 역대 4번째 신생 구단이 가입해서 리그 10구단 체제를 열었다.</p>
          <br></br>
          <br></br>
          <br></br>
      </section>
    </div>
  );
};

export default KT;
