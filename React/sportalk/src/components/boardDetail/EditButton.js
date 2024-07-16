import { Button } from "@mui/material";

const EditButton = ({ onClick }) => {
		return (
			<Button variant="contained" color="primary" onClick={onClick}>
				수정
			</Button>
		);
}
export default EditButton