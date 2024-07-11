// 마이페이지 - 회원정보(프로필) 수정
import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../../../constants';
import * as S from './index.Style';

export default function Index() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [nickName, setNickName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SERVER_URL + '/api/auth/users');
        const data = await response.json();

        setUserId(data.userId);
        setPassword(data.password);
        setEmail(data.email);
        setUserName(data.userName);
        setNickName(data.nickName);
      } catch (error) {
        console.error("! Failed to fetch user data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <S.Form>
      <S.Wrapper>
        <S.InnerWrapper>
          <S.EditForm>
          <S.Title>회원정보 수정</S.Title>
            <S.UserIdWrapper>
              <S.InputTitle>아이디</S.InputTitle>
              <S.UserInput type='text' value={userId} name="userId"
              />
            </S.UserIdWrapper>

            <S.PasswordWrapper>
              <S.InputTitle>비밀번호</S.InputTitle>
              <S.PasswordInput type='password' value={password} name="password"
              />
            </S.PasswordWrapper>

            <S.EmailWrapper>
              <S.InputTitle>이메일</S.InputTitle>
              <S.EmailInput type='email' value={email} name="email"
              />
            </S.EmailWrapper>

            <S.UserNameWrapper>
              <S.InputTitle>이름</S.InputTitle>
              <S.NameInput type="userName" value={userName} name="userName"
              />
            </S.UserNameWrapper>

            <S.NickNameWrapper>
              <S.InputTitle>닉네임</S.InputTitle>
              <S.NickNameInput type="nickName" value={nickName} name="nickName"
              />
            </S.NickNameWrapper>

            <S.SaveButton>저장</S.SaveButton>

          </S.EditForm>

        </S.InnerWrapper>
      </S.Wrapper>
    </S.Form>
  )
}