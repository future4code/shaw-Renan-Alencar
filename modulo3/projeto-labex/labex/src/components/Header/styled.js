import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #161625;
  align-items: center;
  h1{
    font-size: 50px;
    margin: 10px 20px;
    font-weight: bold;
    color: #eb6060;
    cursor: pointer;
  }
`

export const Buttons = styled.div`
  margin: 10px;
  button{
    margin: 10px 20px ;
    padding: 8px;
    border-radius: 8px;
    background-color: #e2eefa;
    font-weight: bold;
    :hover{
      cursor: pointer;
      background-color:#796a6a;
      color:#eb6060;
    }

  }
`
