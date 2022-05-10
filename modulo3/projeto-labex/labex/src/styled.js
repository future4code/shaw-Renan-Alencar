import styled from "styled-components";
import espaco from '../src/assets/fundoTela3.jpg';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  background-image: url(${espaco});
  background-attachment: fixed;
  background-color: #796a6a;
`