import React  from "react"
import styled from "styled-components"

const CompartilharContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

  class SecaoCompartilhar extends React.Component{
    state= {
      botao: '',
      compartilhar: false
    }
    
    onClickCompartilhar = (event) => {

      this.setState({
        botao: event.target.value,
        compartilhar: true
      })
    }

  render(){

    if(this.state.compartilhar){
      console.log(`Post compartilhado no ${this.state.botao}`)
    }

    return <CompartilharContainer>
      <button onClick={this.onClickCompartilhar} value="Facebook">Facebook </button>
      <button onClick={this.onClickCompartilhar} value="Instagram">Instagram</button>
      <button onClick={this.onClickCompartilhar} value="Twitter">Twitter</button>
    </CompartilharContainer>
  }
}

export default SecaoCompartilhar;