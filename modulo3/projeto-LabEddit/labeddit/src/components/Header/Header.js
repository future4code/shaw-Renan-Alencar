import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LabEddit
          </Typography>
          <Button color="inherit" onClick={() => props.botao.function(navigate)}>{props.botao.text}</Button>
        </Toolbar>
      </AppBar>
  );
}
export default Header;
