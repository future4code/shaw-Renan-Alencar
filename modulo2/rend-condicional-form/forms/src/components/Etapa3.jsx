import React from "react";
import styled from "styled-components";

const Botao = styled.button`
  margin-top: 1.25rem;
`;

class Etapa3 extends React.Component {
  render() {
    return (
      <div>
        <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <form>
          <p>5. Por que você não terminou um curso de graduação?</p>
          <input type="text" />
          <p>6. Você fez algum curso complementar?</p>
          <select name="Select">
            <option value="value1">Nenhum</option>
            <option value="value2">Curso técnico</option>
            <option value="value3">Curso de Inglês</option>
          </select>
        </form>
        <Botao onClick={this.props.onClickEtapa4}>Próxima Etapa</Botao>
      </div>
    );
  }
}

export default Etapa3;
