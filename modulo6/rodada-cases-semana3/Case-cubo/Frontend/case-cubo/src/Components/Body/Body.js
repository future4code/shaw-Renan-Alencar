import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Constants/Url";
import { getData } from "../../Hooks/useRequestData";
import {
  Container,
  H1,
  Main,
  Name,
  Number,
  Participation,
  Table,
  Title,
} from "./styled";
import { Chart } from "react-google-charts";

const options = {
  pieHole: 0.3,
  is3D: false,
};


const Body = ({update}) => {
  const [informations, setInformations] = useState([]);

  useEffect(() => {
    getData({
        url: `${BASE_URL}/user`,
        setData: setInformations,
      });
  },[update]);

  const database = informations && informations.map((user) => {
    return [`${user.first_name} ${user.last_name}`, user.participation]
})

  return (
    <Main>
      <Title>
        <H1>Data</H1>
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
        <div>
          <Chart
            chartType="PieChart"
            width="450px"
            height="300px"
            data={[["first_name", "participation"], ...database]}
            options={options}
          />
        </div>
      </Container>
    </Main>
  );
};

export default Body;
