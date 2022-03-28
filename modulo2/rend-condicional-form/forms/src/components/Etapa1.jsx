import React from "react";
import styled from "styled-components";

const Botao = styled.button`
  margin-top: 1.25rem;
`;

class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <form>
          <p>1. Qual o seu nome?</p>
          <input type="text" />
          <p>2. Qual sua idade?</p>
          <input type="text" />
          <p>3. Qual seu email?</p>
          <input type="text" />
          <p>4. Qual a sua escolaridade?</p>
          <select name="select">
            <option value="valor1">Ensino médio incompleto</option>
            <option value="valor2">Ensino médio completo</option>
            <option value="valor3">Ensino superior incompleto</option>
            <option value="valor4">Ensino superior completo</option>
          </select>
        </form>
        <Botao onClick={this.props.onClickEtapa2}>Próxima etapa</Botao>
      </div>
    );
  }
}

export default Etapa1;
