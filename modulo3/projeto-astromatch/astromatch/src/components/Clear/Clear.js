import axios from 'axios'
import { Base_url } from '../../constants/Url'

 export const Clear = () => {
  if (window.confirm("Tem certeza que deseja limpar a lista com todos os Matches?")) {
    axios
      .put(`${Base_url}/clear`)
      .then((res) => {
        alert("Matches resetados com sucesso.")
      })
  }
}
