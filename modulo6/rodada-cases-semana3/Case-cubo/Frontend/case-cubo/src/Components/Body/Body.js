import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Constants/Url";
import { getData } from "../../Hooks/useRequestData";
import {
  Container,
  Main,
  Name,
  Number,
  Participation,
  Table,
  Title,
  TR,
} from "./styled";

const Body = () => {
  const [informations, setInformations] = useState([]);

  useEffect(() => {
    getData({
        url: `${BASE_URL}/user`,
        setData: setInformations,
      },[]);
  });


  return (
    <Main>
      <Title>
        <h1>Data</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          praesentium?
        </p>
      </Title>
      <Container>
        <Table>
          <tr>
            <th></th>
            <Name>Firt Name</Name>
            <Name>Last Name</Name>
            <Participation>Participation</Participation>
          </tr>
          {informations &&
            informations.map((inf, index) => {
              return (
                <tr key={inf.id}>
                  <Number>{index + 1}</Number>
                  <Name>{inf.first_name}</Name>
                  <Name>{inf.last_name}</Name>
                  <Participation>{inf.participation}%</Participation>
                </tr>
              );
            })}
        </Table>
        <div>grafico de pizza</div>
      </Container>
    </Main>
  );
};

export default Body;
