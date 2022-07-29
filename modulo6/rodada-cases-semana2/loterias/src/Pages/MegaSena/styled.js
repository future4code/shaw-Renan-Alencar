import styled from 'styled-components'

export const colorType = color => {
    switch (color) {
      case "mega-sena":
        return "#6BEFA3";
      case "quina":
        return "#8666EF";
      case "lotofácil":
        return "#DD7AC6";
      case "lotomania":
        return "#FFAB64";
      case "timemania":
        return "#5AAD7D";
      case "dia de sorte":
        return "#BFAF83";
      default:
        return "#6BEFA3";
    }
  };

export const MainContainer = styled.div`
    display: flex;
    flex-flow: row;
    text-align: center;
    justify-content: space-between;
    height: 100vh;
    width: 100vw;
    background-color: #EFEFEF;
    @media screen and (min-device-width:320px) and (max-device-width:768px){
      flex-flow: column;
    }
`

export const LeftSide = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    height: 100%;
    background-color: ${({ color }) => colorType(color)};
    position: relative;
  
    @media screen and (min-device-width:320px) and (max-device-width:768px){
      width: 100%;
      height: 60%;
    }
`

export const DivSelect = styled.div`
  border-radius: 5px;
  padding: 0.313rem;
  height: 27.125rem;
  
`;

export const LeftContent = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 90%;
    height: 95%;
    margin: auto 3.125rem;
    color: white;
    @media screen and (min-device-width:426px) and (max-device-width:768px){
      align-items: center;
      height: 70%;
      margin-bottom: 15%;
    }
    @media screen and (min-device-width:376px) and (max-device-width:425px){
      align-items: center;
      height: 70%;
      margin-bottom: 25%;
    }
    @media screen and (min-device-width:320px) and (max-device-width:375px){
      align-items: center;
      height: 70%;
      margin-bottom: 30%;
    }
`


export const Contest = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rm;
    p{
        margin: 0.313rem;
    }
    @media screen and (min-device-width:320px) and (max-device-width:768px){
      align-items: center;
    }
`

export const RightSide = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-end;
    margin: auto;
    width: 60%;
    height: 100%;
    position: relative;
    @media screen and (min-device-width:320px) and (max-device-width:768px){
      width: 100%;
      height: 40%;
    }
`

export const RightBackground = styled.img`
    height: 100%;
    position: absolute;
    left: 50%;
    @media screen and (min-device-width:320px) and (max-device-width:768px){
      display: none;
    }
`
export const RightBackgroundHoriz = styled.img`
    display: none;
    @media screen and (min-device-width:320px) and (max-device-width:768px){
      display: flex;
      width: 100%;
      height: 50%;
      position: absolute;
      top: 75%;
    }
`

export const RightContent = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 90%;
    height: 100%;
    p{
        font-weight: bolder;
        margin-bottom: 2.188rem;
    }
    @media screen and (min-device-width:320px) and (max-device-width:425px){
      p{
        margin-bottom: 1.25rem;
      }
    }
`

export const Texto = styled.p`
  display: flex;
  position: absolute;
  bottom: 0%;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
`

export const Numbers = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 65%;
    @media screen and (min-device-width:320px) and (max-device-width:768px){
      margin-bottom: 15%;
    }
    @media screen and (min-device-width:376px) and (max-device-width:425px){
      margin-bottom: 30%;
      width: 80%;
    }
    @media screen and (min-device-width:320px) and (max-device-width:375px){
      margin-bottom: 40%;
      width: 90%;
    }
`