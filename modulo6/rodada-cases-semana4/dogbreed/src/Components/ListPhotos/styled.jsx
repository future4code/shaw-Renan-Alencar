import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListPhoto = styled.img`
  width: 20rem;
  height: 20rem;
  margin: 1rem;
  border-radius: 8px;
  transition: 0.2s;
  :hover {
    transition: 0.2s;
    transform: scale(1.02);
    box-shadow: 0px 0px 5px grey;
  }
`;

export const ModalStyled = styled.img`
  width: 35rem;
  height: 35rem;

  :hover {
    transition: 0.2s;
    transform: scale(1.02);
    box-shadow: 0px 0px 5px grey;
  }

  @media screen and (max-width: 480px) {
    width: 22rem;
    height: 25rem;
  }
`;
