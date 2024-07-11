import { styled } from 'styled-components';

export const Form = styled.form`
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 70%;
  padding: 0;
  margin: 0;
`;

export const InnerWrapper = styled.div`
  border-left: 0.5px solid rgb(100, 100, 100, 0.3);
  width: 90%;
  margin: 0 auto;
`;

export const Title = styled.div`
  width: 650px;
  margin: 10px;
  margin-left: 50px;
  padding: 5px;
  font-family: "Pretendard-SemiBold";
  font-size: 35px;
  text-align: left;
`;

export const EditForm = styled.div`
  width: 650px;
  margin: 0 auto;
  padding: 25px;
  border-radius: 25px;
  border: 0.5px solid rgb(100, 100, 100, 0.3);
  background-color: #ffffff;
`;
  
export const InputTitle = styled.div`
  text-align: left;
  padding: 5px;
  font-family: "Pretendard-SemiBold";
`;
  
export const UserIdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 10px;
  margin-left: 50px;
  // border: 1px solid purple;
`;

export const UserInput = styled.input`
  width: 350px;
  margin: 5px;
  padding: 9px;
  border-radius: 7px;
  border: 1px solid rgb(200,200,200);
  &:hover{
    border: 1px solid rgb(100, 100, 100);
  }
  &:focus{
    border: 1px solid rgb(100, 100, 100);
  }
`;

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 10px;
  margin-left: 50px;
  // border: 1px solid purple;
`;

export const PasswordInput = styled.input`
  width: 350px;
  margin: 5px;
  padding: 9px;
  border-radius: 7px;
  border: 1px solid rgb(200,200,200);
`;

export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 10px;
  margin-left: 50px;
  // border: 1px solid purple;
`;

export const EmailInput = styled.input`
  width: 350px;
  margin: 5px;
  padding: 9px;
  border-radius: 7px;
  border: 1px solid rgb(200,200,200);
`;

export const UserNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 10px;
  margin-left: 50px;
  // border: 1px solid purple;
`;

export const NameInput = styled.input`
  width: 350px;
  margin: 5px;
  padding: 9px;
  border-radius: 7px;
  border: 1px solid rgb(200,200,200);
`;

export const NickNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 10px;
  margin-left: 50px;
  // border: 1px solid purple;
`;

export const NickNameInput = styled.input`
  width: 350px;
  margin: 5px;
  padding: 9px;
  border-radius: 7px;
  border: 1px solid rgb(200,200,200);
`;

export const SaveButton = styled.button`
  width: 100px;
  background-color: ;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  font-family: 'Pretendard-SemiBold';
  font-size: 19px;
  border: 0.5px solid rgb(100, 100, 100, 0.2);
  background-color: rgb(55, 230, 250, 0.3);
  &:hover {
    background-color: rgb(55, 230, 250, 0.5);
  }
`;