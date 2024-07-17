// 메인 홈 화면 페이지
import React, { useEffect, useState } from "react";
import * as S from "./index.Style";
import mainImg from "../../assets/images/baseball-main.png";

const mainText = [
  // "야구 커뮤니티 Sportalk⚾",
  "야구가 끝난 후엔?",
  "Sportalk으로!",
];

const Index = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const typeAnimation = () => {
      const type = mainText[index];
      let typedText = "";
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        typedText += type[currentIndex];
        setText(typedText);
        currentIndex++;

        if (currentIndex === type.length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % mainText.length);
          }, 2000);
        }
      }, 100);

      return () => {
        clearInterval(typingInterval);
      };
    };

    const typingTimeout = setTimeout(typeAnimation, 2000);
    return () => clearTimeout(typingTimeout);
  }, [index]);

  return (
    <S.Wrapper>
      <S.MainDiv>
        <S.TextWrapper>
          <S.TextContent>{text}<span id="blink">|</span></S.TextContent>
        </S.TextWrapper>
        <S.MainImg src={mainImg} alt="" />
      </S.MainDiv>
    </S.Wrapper>
  );
};
export default Index;
