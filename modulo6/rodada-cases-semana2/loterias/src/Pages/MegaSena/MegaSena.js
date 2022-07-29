import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Constants/Url";
import { getData } from "../../Hooks/useRequestData";
import loto_bk from "../../assets/loteria_bk.png";
import loto_horiz from "../../assets/loteria_horiz.png";
import {
  Contest,
  DivSelect,
  LeftContent,
  LeftSide,
  MainContainer,
  Numbers,
  RightBackground,
  RightBackgroundHoriz,
  RightContent,
  RightSide,
  Texto,
} from "./styled";
import SelectContest from "../../Components/SelectContest/SelectContest";
import moment from "moment";
import DrawnNumbers from "../../Components/DrawnNumbers/DrawnNumbers";

const MegaSena = () => {
  const [lottery, setLottery] = useState([]);
  const [gameName, setGameName] = useState("MEGA-SENA");
  const [concursos, setConcursos] = useState();
  const [result, setResult] = useState({
    id: "2359",
    numeros: ["31", "32", "39", "42", "43", "51"],
    data: "2022-07-24T21:35:02.483Z",
  });

  useEffect(() => {
    getData({
      url: `${BASE_URL}/loterias`,
      setData: setLottery,
    });

    getData({
      url: `${BASE_URL}/loterias-concursos`,
      setData: setConcursos,
    });
  }, []);

  useEffect(() => {
    concursos &&
      getData({
        url: `${BASE_URL}/concursos/${concurdoId[0].concursoId}`,
        setData: setResult,
      });
  }, [gameName]);

  const filterLotteryId = lottery
    .filter((lotte) => {
      return lotte.nome === gameName;
    })
    .map((lotte) => {
      return lotte.id;
    });

  const concurdoId =
    concursos &&
    concursos.filter((c) => {
      return c.loteriaId == filterLotteryId;
    });


  return (
    
    <MainContainer >
      <LeftSide color={gameName} >
        <LeftContent >
          <DivSelect>
          <SelectContest
            gameName={gameName}
            setGameName={setGameName}
            lottery={lottery}
          />

          </DivSelect>
          {result ? (
            <Contest>
              <p>Consurso</p>
              <p>
                <strong>
                  {result.id} - {moment(result.data).format("DD/MM/YYYY")}
                </strong>
              </p>
            </Contest>
          ) : (
            <p>Carregando dados</p>
          )}
        </LeftContent>

        <RightBackground src={loto_bk} />
        <RightBackgroundHoriz src={loto_horiz} />
      </LeftSide>
      <RightSide>
        <RightContent>
          <Numbers>
            {result ? (
              result.numeros.map((numero) => {
                return <DrawnNumbers key={numero.numero} numero={numero} />;
              })
            ) : (
              <p>Carregando números</p>
            )}
          </Numbers>
          <Texto>
            Este sorteio é meramente ilustrativo e não possui nenhuma ligação
            com a CAIXA
          </Texto>
        </RightContent>
      </RightSide>
    </MainContainer>
  );
};

export default MegaSena;
