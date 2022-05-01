import styled from "styled-components";

export const Main = styled.div `
  display: flex;
  flex-direction: column;
  font-size: 50px;
  font-weight: bold;
  color: #fcfcfc;
  text-align: center;
  margin: 40px 30px;

  button{
    margin-top: 70px;
    padding: 20px;
    border-radius: 8px;
    font-size: 20px;
    font-weight: bold;
    background-color: #bcdbf8;
    :hover{
      cursor: pointer;
      background-color:#796a6a;
      color:#eb6060;
    }
  }
`