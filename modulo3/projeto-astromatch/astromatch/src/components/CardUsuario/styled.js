import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 28.125rem;
  width: 21.875rem;
  box-shadow: 5px 5px 10px black;
  border-radius: 15px;
  overflow: hidden;
  
  img {
    width: 100%;
    z-index: 1;
  }
  div {
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0.938rem;
    z-index: 2;
    span {
      display: flex;
      align-content: center;
      margin: 0px 20px;
      h2 {
        font-size: 23px;
      }
    }
    p {
      margin: 5px 20px;
    }
  }
`;
