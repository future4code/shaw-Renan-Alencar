import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.625rem 0;
  background-color: #e0e0e0;
  width: 19.625rem;
  min-height: 10.438rem;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0.625rem;
`;
export const Usuario = styled.p`
  font-family: 'IBM Plex Sans';
  font-weight: 400;
  font-size: 0.75rem;
  color: #6F6F6F;
  margin: 0;
`

export const Mensagem = styled.p`
  font-family: "IBM Plex Sans";
  font-weight: 400;
  font-size: 1.125rem;

`;

export const DivButtons = styled.div`
  display: flex;
`

export const DivCurtir = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  margin: 0 1.25rem 0 0;
  border-radius: 10px;
  padding: 0.313rem;
`;

export const IMGS = styled.img`
  width: 1.25rem;
  margin: 0 0.625rem;
  :hover{
    cursor: pointer;
  }
`

export const ButtonComentarios = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  margin: 0 1.25rem 0 0;
  border-radius: 10px;
  padding: 0.313rem;
  &hover{
    cursor: pointer;
  }
`
