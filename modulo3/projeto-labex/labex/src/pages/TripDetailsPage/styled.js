import styled from "styled-components";

export const Lista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98vw;
  font-weight: bold;
  color: white;
  margin-top: 40px;
  list-style: none;
`;

export const CanditadosDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  div {
    
    min-width: 200px;
    margin: 0 30px;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }
`;

export const CardViagem = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
`;

export const ButtonCandidato = styled.button`
  padding: 5px 10px;
  border-radius: 8px;
  margin: 10px 15px;
  :hover {
    cursor: pointer;
    background-color: #796a6a;
    color: #eb6060;
  }
`;
