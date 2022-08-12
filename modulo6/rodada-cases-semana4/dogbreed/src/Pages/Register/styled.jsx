import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ebb365;
  height: 100vh;
  p{
    font-size: 1.5rem;
  }

  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
`;

export const Button = styled.button`
  margin: 1.25rem;
  padding: 0.938rem 1.563rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  background-color: #61413e;
  transition: 0.2s;
  color: #ebb365;
  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px #61413e;
  }
`;
