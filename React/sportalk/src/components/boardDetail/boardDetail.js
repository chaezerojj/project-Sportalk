import {Box,Container,Typography } from '@mui/material';
import React,{useEffect, useState} from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import LikePosts from './likePosts';
import {useAuth} from '../../contexts/AuthProvider';

import EditButton from './EditButton';
import DeleteButton from './deleteButton';

function BoardDetailPage() {
  const {id} = useParams()
  const [post,setPost] = useState(null)
	const navigate = useNavigate();
	const { isLoggedIn } = useAuth();

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
	const handleLikeClick = () => {
		if (isLoggedIn) {
			fetch(`/api/sportalk/board/${id}/like`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ postId: id }),
			})
				.then((res) => res.json())
				.then((data) => {
					setPost((prevPost) => ({
						...prevPost,
						like: data.like,
					}));
				})
				.catch((err) => console.error(err));
		} else {
			const confirmed = window.confirm("로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?");
			if (confirmed) {
				navigate("/sportalk/login");
			}
		}
	};
	
	// 수정
	const handleEdit=()=>{
		console.log("수정기능구현")
		navigate(`/sportalk/board/${id}/edit`)
	}
	// 삭제 
	const handleDelete = () => {
    if (window.confirm('정말로 이 게시글을 삭제하시겠습니까?')) {
      fetch(`/api/sportalk/board/${id}`, {
        method: 'DELETE',
      })
        .then((res) => {
          if (res.ok) {
            console.log('게시글 삭제 성공');
            navigate('/sportalk/board'); // 삭제 후 목록 페이지로 이동
          } else {
            throw new Error('게시글 삭제에 실패했습니다.');
          }
        })
        .catch((error) => {
          console.error('Error deleting post:', error);
        });
    }
  };
	console.log()
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
			
      <Box display="flex" justifyContent="space-between">
        <EditButton onClick={handleEdit} />
        <DeleteButton onClick={handleDelete} />
      </Box>
    </Container>
  );
}

export default BoardDetailPage;
