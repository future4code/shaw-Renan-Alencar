import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1.875rem;
`

export const Comentario = styled.input`
  width: 20.625rem;
  height: 8.188rem;
  background-color: #EDEDED;
  border-radius: 12px;
  margin-top: 1.875rem;
`

export const Button = styled.button`
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border-radius: 27px;
  width: 20.313rem;
  height: 3.188rem;
  margin: 1.125rem 0 3.125rem 0;
  font-size: 1.125rem;
  font-weight: bolder;
  color: white;
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