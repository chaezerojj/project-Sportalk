import { Button } from "@mui/material";

const DeleteButton = ({ onClick }) => {
  return (
    <Button variant="contained" color="secondary" onClick={onClick}>
      삭제
    </Button>
  );
}
export default DeleteButton