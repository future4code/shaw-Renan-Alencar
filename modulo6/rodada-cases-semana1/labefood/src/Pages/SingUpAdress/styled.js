import styled from "styled-components";
import { Button } from "@mui/material";

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 80%;
  justify-content: space-evenly;
`;

export const ButtonStyled = styled(Button)`
  && {
    background-color: #e86e5a;
    color: #000000;
    width: 100%;
  }
`;
