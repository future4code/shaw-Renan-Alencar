import React from "react";
import styled from "styled-components";

const Botao = styled.button`
  margin-top: 1.25rem;
`;

class Etapa2 extends React.Component{
  render(){
    return(
      <div>
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        <form>
          <p>5. Qual curso?</p>
          <input type="text" />
          <p>6. Qual a unidade de ensino?</p>
          <input type="text" />
        </form>
        <Botao onClick={this.props.onClickEtapa3}>Próxima Etapa</Botao>
      </div>
    )
  }
}

export default Etapa2;