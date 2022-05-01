import styled from "styled-components"

export const Lista = styled.div`
  display: flex; 
  flex-wrap: wrap;
  justify-content: center;
  width: 98vw;
  font-weight: bold;
  

  div{
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-around;
    margin: 5px;
    max-width: 350px;
    height: 250px;
  }

  .DivCard{
    display: flex;
    align-items: center;
    padding: 0 20px;
    background-color: #c2c1c1;
  }

  button{
    padding: 5px 20px;
    border-radius: 8px;
    :hover{
      cursor: pointer;
      background-color:#796a6a;
      color:#eb6060;
    }
  }
`

export const CardName = styled.p`
  font-size: 30px;
  font-weight: bold;
`

export const Return = styled.button`
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
`
