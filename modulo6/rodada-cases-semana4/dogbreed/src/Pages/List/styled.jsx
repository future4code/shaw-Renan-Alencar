import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ebb365;
  height: 32vh;
  width: 100%;

  @media screen and (max-width: 480px) {
    height: 25vh;
  }
`;

export const Button = styled.button`
  margin: 1rem 1rem;
  padding: 0.5rem 1rem;
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

  @media screen and (max-width: 480px) {
    margin: 0.5rem 0.2rem;
    padding: 0.5rem 1rem;
  }
`;

export const ContainerList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #efefef;
`;

export const ListPagination = styled.div`
  background-color: #efefef;
  width: 100%;
  display: flex;
  justify-content: center;

  .pagination--active {
    background-color: #d8d8d8;
    font-size: 1rem;
    border: none;
  }
  .pagination--active:focus {
    outline: none;
  }
`;
