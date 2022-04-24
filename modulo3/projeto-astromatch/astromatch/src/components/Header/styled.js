import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  p{
    font-size: 25px;
    font-weight: bold;
  }

  button {
    border: none;
    background-color: white;
    border-radius: 20px;
    :hover{
      cursor: pointer;
      background-color:#ecdfdb;;
    }
  }
`;
