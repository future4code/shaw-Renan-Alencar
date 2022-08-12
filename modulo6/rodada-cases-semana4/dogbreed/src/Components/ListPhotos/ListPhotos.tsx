import React from "react";
import * as Style from "./styled";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

const ListPhotos = (dog: any) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Style.MainContainer>
      <Style.ListPhoto src={`${dog.dog}`} alt="dog" onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Style.ModalStyled src={`${dog.dog}`} alt="dog" />
        </Box>
      </Modal>
    </Style.MainContainer>
  );
};

export default ListPhotos;
