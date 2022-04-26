import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  
  button {
    border-radius: 55px;
    padding: 20px;
    cursor: pointer;
    background-color: white;
  }

  .like {
    :hover {
      background-color: #24da24;
    }
  }

  .deslike {
    :hover {
      background-color: #f5445b;
    }
  }
`;
