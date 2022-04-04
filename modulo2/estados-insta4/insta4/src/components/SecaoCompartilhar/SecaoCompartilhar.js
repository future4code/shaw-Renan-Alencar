import React  from "react"
import styled from "styled-components"

const CompartilharContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;

    div{
      flex-direction: column;
    }
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

const Button = styled.button`
  margin: 5px;
`


  class SecaoCompartilhar extends React.Component{
    state= {
      botao: '',
      compartilhar: false,
      comentario: ''
    }
    
    onChangeComentario = (event) => {
      this.setState({comentario: event.target.value});
    }

    onClickCompartilhar = (event) => {
      this.setState({
        botao: event.target.value,
        compartilhar: true,
      })
    }

    limparComentario = () => {
      this.setState({comentario: ''})
    }

  render(){

    if(this.state.compartilhar){
      console.log(`Post compartilhado no ${this.state.botao} com a mensagem: ${this.state.comentario}`);
    }

    return <CompartilharContainer>
      <div>
        <Button onClick={this.onClickCompartilhar} value="Facebook">Facebook </Button>
        <Button onClick={this.onClickCompartilhar} value="Instagram">Instagram</Button>
        <Button onClick={this.onClickCompartilhar} value="Twitter">Twitter</Button>
        <div>
          <InputComentario 
          placeholder={'Comentário'}
          value={this.state.comentario}
          onChange={this.onChangeComentario}
          />
        </div>
      </div>
    </CompartilharContainer>
  }
}

export default SecaoCompartilhar;