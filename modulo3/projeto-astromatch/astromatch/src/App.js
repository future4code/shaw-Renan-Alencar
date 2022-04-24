import React from 'react'
import { Header } from './components/Header/Header'
import Matchs from './pages/Matches/Matches'
import Usuarios from './pages/Usuarios/Usuarios'

const App = () => {
  const [ atualizarPagina, setAtualizarPagina] = React.useState('usuarios')

  const mudarPagina = () => {
    switch (atualizarPagina){
      case 'usuarios':
        return (<Usuarios />)
      case 'matches':
        return (<Matchs />)
      default:
        return (<Usuarios />)
    }
  }

  const onChangePagina = (value) => {
    setAtualizarPagina(value)
  }
  return (
    <div>
      <Header onChangePagina={onChangePagina}/>
      {mudarPagina()}
    </div>
  )
}

export default App