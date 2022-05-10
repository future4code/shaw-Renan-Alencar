import styled from "styled-components";

export const MainCoainter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-top: 30px ;

  h2{
    font-size: 30px;
    margin: 20px;
  }
`

export const Trips = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 1px black;
  min-width: 300px;
  height: 40px;
  background-color: #c2c1c1;
  border-radius: 8px;
  margin: 10px 0;
  :hover{
    cursor: pointer;
    background-color: #72d0f5;
  }
  div {
    margin: 0 10px;
  }

  button{
    :hover{
      cursor: pointer;
      background-color: #eb6060;
    }
  }
`;
