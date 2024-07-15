// 게시판 페이지
import React, { useEffect, useState } from 'react'
import * as S from './index.Style';
import {Button,Grid,Table,TableBody,TableCell,TableHead,TableRow} from '@mui/material';
import PaginationCustom from './pagination';
import SearchBar from './searchBar';
import Sort from './sort';
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import ModalComponent from '../../components/boardDetail/modal';

export default function Index() {

	const [posts,setPosts] = useState([])
	const [filteredPosts,setFilteredPosts]=useState([])
	const {userId}=useAuth();
	console.log(userId)
	const fetchPosts=()=>{
		fetch("/api/sportalk/board")
			.then(res=>res.json())
			.then(data=>{
				data.sort((a, b) => new Date(b.regDate) - new Date(a.regDate))
				setPosts(data)
				setFilteredPosts(data)
			})
			.catch(err=>console.error(err))
	}
	
	useEffect(()=>{
		fetchPosts()
	},[])

	// 페이지네이션
	const [currentPage, setCurrentPage]=useState(1);
	const itemsPerPage=10;
	const totalPages=Math.ceil(filteredPosts.length/itemsPerPage)

	// 검색
	const handleFilterPosts=(field,inputValue)=>{
		let filtered
		if(inputValue===""){
			filtered=posts
		}
		else{
			filtered=posts.filter(post=>{
				const fieldValue=post[field] ? post[field].toLowerCase():""
				return fieldValue.includes(inputValue.toLowerCase());
			})
		}
		setFilteredPosts(filtered)
		setCurrentPage(1)
	}

	const currentPosts=filteredPosts.slice((currentPage-1)*itemsPerPage,currentPage*itemsPerPage)

	const handlePageChange=pageNumber=>{
		setCurrentPage(pageNumber)
	}

	// 정렬
	const [sortType,setSortType]=useState("latest")

	useEffect(()=>{
		handleSortPosts(sortType)
	},[sortType])

	const handleSortPosts=(type)=>{
		let sorted
		switch(type){
			case "latest":
				sorted=[...filteredPosts].sort((a,b)=>new Date(b.regDate)-new Date(a.regDate))
				break;
			case "like":
				sorted=[...filteredPosts].sort((a,b)=>b.like-a.like)
				break;
			case "comment":
				sorted=[...filteredPosts].sort((a,b)=>b.commentCount-a.commentCount)
				break;
			default:
				sorted=filteredPosts
		}
		setFilteredPosts(sorted)
	}

	const handleSortChange=(type)=>{
		setSortType(type)
		setCurrentPage(1)
		
	}

	// 상세페이지로 이동
	const navigate=useNavigate();

	const goToDetailPage=postId=>{
    navigate(`/sportalk/board/${postId}`)
  }

	// 작성하기 페이지
	const {isLoggedIn}=useAuth()
	const [open,setOpen]=useState(false)
	
	const handleLoginRedirect=()=>{
		setOpen(false)
		navigate("/sportalk/login")
	}

	const handleOpen=()=>{
		if(!isLoggedIn){
			setOpen(true)
		}
		else{
			navigate("/sportalk/board/create")
		}
	}
	const handleClose=()=>{
		setOpen(false)
	}
  return (

    <S.Wrapper>
      <h2>게시판 페이지</h2>
			<S.TableContainer>
				<S.TableWrap>
					<SearchBar onFilter={handleFilterPosts}/>
					<Sort onSortChange={handleSortChange}/>
				</S.TableWrap>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell width="100px" align="center">No</TableCell>
							<TableCell width="350px" align="center">제목</TableCell>
							<TableCell width="150px" align="center">작성자</TableCell>
							<TableCell width="200px"align="center">작성일자</TableCell>
							<TableCell width="100px" align="center">좋아요</TableCell>
							<TableCell width="100px" align="center">댓글 수</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
          {currentPosts.map((post, i) => (
            <TableRow key={post.id}>
              <TableCell align="center">{i + 1}</TableCell>
              <TableCell align="left">
							<button
                    onClick={() => goToDetailPage(post.id)}
                    style={{textDecoration:"none", color:"inherit", background:"none", border:"none", cursor:"pointer" }}
                  >
                    {post.title}
              </button>
							</TableCell>
              <TableCell align="center">{post.nickName}</TableCell>
              <TableCell align="center">{post.regDate}</TableCell>
              <TableCell align="center">{post.like}</TableCell>
              <TableCell align="center">{post.commentCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
				</Table>
				<Grid container justifyContent="flex-end">
					<Button variant="contained" color="primary" onClick={handleOpen} style={{marginTop:"20px"}}>
					작성하기
					</Button>
				</Grid>
				<PaginationCustom
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePageChange}
				/>
			</S.TableContainer>
			{/* modal */}
			<ModalComponent
				open={open}
				handleClose={handleClose}
				handleLoginRedirect={handleLoginRedirect}
			/>
    </S.Wrapper>
		
  )
}
