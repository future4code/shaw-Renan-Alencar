import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

const DivList = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  button{
    border-radius: 8px;
  }

  button:hover{
    border-radius: 10px;
    background-color: #757575 ;
  }
`;


class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
  }

  componentDidMount() {
    if (localStorage.getItem("tarefas")) {
      const tarefasLocal = localStorage.getItem("tarefas");
      this.setState({ tarefas: JSON.parse(tarefasLocal) });
    }
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };

    const novasTarefas = [...this.state.tarefas, novaTarefa];
    this.setState({ tarefas: novasTarefas });
  };

  selectTarefa = (id) => {
    const selectTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa,
        };
        return novaTarefa;
      } else {
        return tarefa;
      }
    });
    this.setState({ tarefas: selectTarefas });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  apagarTarefa = (id) => {
    const apagarTarefa = this.state.tarefas.filter((tarefa) => {
      return id !== tarefa.id;
    });
    this.setState({ tarefas: apagarTarefa });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <DivList>
                <Tarefa
                  key={tarefa.id}
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
                <button onClick={() => this.apagarTarefa(tarefa.id)}>
                  Remover
                </button>
              </DivList>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
