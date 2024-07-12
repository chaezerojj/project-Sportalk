import React from 'react';
import { Button } from '@mui/material';

const LikePosts = ({ postId,handleLikeClick, likeCount }) => {
  
	const handleLike = () => {
    handleLikeClick();
  };
  return (
    <Button onClick={handleLike} size="small" variant="outlined" style={{ marginRight: "10px" }}>
      💗 좋아요 {likeCount}
    </Button>
  );
};

export default LikePosts;
