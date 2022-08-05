import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start
`;

export const DivSelect = styled.div`
  margin-bottom: 17rem;
  @media screen and (min-device-width: 320px) and (max-device-width: 768px) {
    width: 100%;
    height: 60%;
    margin-bottom: 6.25rem;
  }
`;

export const GameName = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  font-size: 1.875rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-style: normal;
  @media screen and (min-device-width: 320px) and (max-device-width: 900px) {
    flex-flow: column;
  }
`;

export const SelectLottery = styled.select`
  font-weight: 500;
  font-size: 0.938rem;
`;

export const IMG = styled.img`
  width: 3.125rem;
  margin: 0 0.625rem;
`;
