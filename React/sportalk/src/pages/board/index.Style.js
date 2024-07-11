import { styled } from 'styled-components';


export const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
  margin: 40px;

`;
export const TableContainer=styled.div`
	width:70%;
	margin: 0 auto;
	position:relative;
	right:40px;
`;
export const Pagination=styled.ul`
	display:flex;
	list-style:none;
	padding:0;
	position:absolute;
	left:50%;
	margin-left:-120px;
`;
export const PageItem=styled.li`
	margin:0 2px;
`;
export const SearchWrap=styled.div`
	width:400px;
	display:flex;
	align-items:center;
`;
export const TableWrap=styled.div`
	display:flex;
	justify-content:space-between;
`;
