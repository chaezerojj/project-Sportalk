import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  // border: 1px solid green;
`;

export const PostList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextTitle = styled.div`
  margin: 10px;
  padding: 5px;
  font-family: "Pretendard-SemiBold";
  font-size: 35px;
`;

export const ListWrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  // border: 1px solid purple;
`;

export const List = styled.div`
  // border: 1px solid red;
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 850px;
  text-align: center;
  margin: 10px auto;
  margin-bottom: 30px;
  border-top: 1px solid rgb(200, 200, 200);
  border-bottom: 1px solid rgb(200, 200, 200);
`;

export const Thead = styled.thead`
  border-bottom: 1px solid rgb(200, 200, 200);
`;
export const ThTitle = styled.th`
  text-align: center;
  padding: 15px;
  width: 600px;
`;
export const Tbody = styled.tbody`
`;

export const TdTitle = styled.td`
text-align: center;
padding: 15px;
width: 600px;
  &:hover {
    cursor: pointer;
    background-color: rgb(200, 200, 200, 0.1);
  }
`;

export const TdDate = styled.td`
  width: 100px;
  padding: 15px;
`;