import styled from 'styled-components';

export const MainForm = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  color: white;
  font-weight: bold;

  h2{
    font-size: 25px;
    margin-bottom: 10px;
  }

  input{
    margin: 5px;
    padding: 5px 10px;
    min-width: 300px;
    border-radius: 8px;
  }
`

export const ButtonDiv = styled.div `
  display: flex;
  justify-content: space-around;
  min-width: 300px;
  margin-top: 15px;

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