import axios from "axios";
import React, { useEffect } from "react";
import PokeCard from "./components/PokeCard/PokeCard";
import './App.css'

function App() {
  const [pokeList, setPokeList] = React.useState([]);
  const [pokeName, setPokeName] = React.useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setPokeList(res.data.results);
      })
      .catch((err) => {
        alert("Houve alguem erro, tenta novamente")
      });
  }, []);

  const changePokeName = (event) => {
    setPokeName(event.target.value)
  }

  return (
    <div className="divPai">
      <select onChange={changePokeName}>
        <option value="">Nenhum</option>
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name.toUpperCase()}
            </option>
          );
        })}
      </select>

      {pokeName && <PokeCard pokemon={pokeName}/>}
    </div>
  );
}

export default App;
