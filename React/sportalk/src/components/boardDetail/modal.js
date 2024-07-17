import { Box, Button, Modal, Typography } from "@mui/material"

function ModalComponent({open,handleClose,handleLoginRedirect}){

	return(
		<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
					display:"flex",
					justifyContent:"center",
					height:"155px",
					marginTop:"30px"
        }}
      >
        <Box sx={{ bgcolor: 'background.paper', p:3, borderRadius: '10px' }}>
          <Typography variant="h6" id="modal-title">로그인 후 이용 가능합니다.</Typography>
          <Typography id="modal-description">로그인 화면으로 이동하시겠습니까?</Typography>
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button onClick={handleLoginRedirect} color="primary" variant="contained">확인</Button>
            <Button onClick={handleClose} color="primary" variant="contained" sx={{ ml: 1 }}>닫기</Button>
          </Box>
        </Box>
      </Modal>
	)
}
export default ModalComponent
