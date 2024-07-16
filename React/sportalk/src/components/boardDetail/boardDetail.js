import {Box,Container,Typography } from '@mui/material';
import React,{useEffect, useState} from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import LikePosts from './likePosts';
import {useAuth} from '../../contexts/AuthProvider';
import ModalComponent from './modal';

function BoardDetailPage() {
  const {id} = useParams()
  const [post,setPost] = useState(null)
	const {isLoggedIn}=useAuth()
	const [open,setOpen]=useState(false)
	const navigate = useNavigate();
	
   useEffect(() => {
    const fetchPostById = () => {
      fetch(`/api/sportalk/board/${id}`)
        .then(res => res.json())
        .then(data => {
          setPost(data)
        })
        .catch(err => {
          console.error('Error fetching post:', err);
        });
    };

    fetchPostById();
  }, [id]);
	
	// 좋아요 클릭 이벤트
	const handleLikeClick=()=>{
		if(isLoggedIn){
			fetch(`/api/sportalk/board/${id}/like`,{
				method:"Post",
				headers:{
					"content-Type":"application/json"
				},
				body:JSON.stringify({postId:id})
			})
			.then(res=>res.json())
			.then(data=>{
				setPost(prevPost=>({
					...prevPost,
					like:data.like
				}))
			})
			.catch(err=>console.error(err))
		}
		else{
			setOpen(true)
		}
	}
	const handleClose=()=>{
		setOpen(false)
	}
	const handleLoginRedirect=()=>{
		setOpen(false)
		navigate("/sportalk/login")
	}

  return (
    <Container>
      <Box my={4}>
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<Typography variant="h4" gutterBottom>
						{post && post.title}
					</Typography>
					<Typography variant="subtitle1" style={{fontSize:"0.8rem"}}>
						작성일자: {post && post.regDate}
					</Typography>
				</Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1" style={{ fontSize:"0.8rem"}}>
            작성자: {post && post.nickName}
          </Typography>
          <Typography variant="subtitle1" style={{ fontSize:"0.8rem"}}>
            💗좋아요 {post && post.like} | 💬댓글 {post && post.commentCount}
          </Typography>
        </Box>
        <Typography variant="body1" paragraph style={{marginTop:"50px"}}>
          {post && post.content}
        </Typography>

				<LikePosts postId={id} handleLikeClick={handleLikeClick}likeCount={post && post.like}/>
      </Box>

			{/* modal */}
			<ModalComponent
				open={open}
				handleClose={handleClose}
				handleLoginRedirect={handleLoginRedirect}
			/>
    </Container>
  );
}

export default BoardDetailPage;