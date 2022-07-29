import React from "react";
import logo from "../../assets/logo.png";
import { DivSelect, GameName, IMG, MainContainer, SelectLottery } from "./styled";

const SelectContest = ({ gameName, setGameName, lottery}) => {
  const lotteriesOptions = lottery.map((l) => {
    return (
      <option key={l.id} value={l.nome}>
        {l.nome.toUpperCase()}
      </option>
    );
  });

  const handleModification = (event) => {
    setGameName(event.target.value);
  };

  return (
    <MainContainer>
      <DivSelect>
        <SelectLottery onChange={handleModification}>
          {lotteriesOptions}
        </SelectLottery>
      </DivSelect>
      <GameName>
        <IMG src={logo} alt="logo loteria" />
        {gameName && gameName.toUpperCase()}
      </GameName>
    </MainContainer>
  );
};

export default SelectContest;
