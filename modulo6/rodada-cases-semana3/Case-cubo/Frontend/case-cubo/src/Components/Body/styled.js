import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Table = styled.table`
  border-collapse: collapse;
  th, tr, td {
    border: solid 1px rgb(120, 120, 120);
  }
`;
export const Name = styled.th`
  padding: 0.8rem 0.7rem;
  text-align: start;
  width: 200px;
`;

export const Number = styled.th`
  padding: 0.7rem 0.9rem;
`;

export const Participation = styled.th`
  padding: 0.8rem 0.7rem;
  text-align: center;
`;
