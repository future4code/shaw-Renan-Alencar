import styled from "styled-components";

export const ListaMatches = styled.div`
  display: flex;
  flex-direction: column;
  li{
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  
  img{
    width: 60px;
    height: 60px;
    border-radius: 50px;
    margin-right: 20px;
  }
`

export const Button = styled.div`
display: flex;
justify-content: flex-end;
margin: 10px 0;

button{
  padding: 5px;
  border-radius: 5px;
  background-color: #f7f1ef;
  :hover{
    cursor: pointer;
    background-color: #fdad92;
  }
}
`

