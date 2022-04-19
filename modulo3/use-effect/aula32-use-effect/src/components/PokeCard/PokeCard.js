import React, { useEffect } from "react";
import axios from "axios";
import './PokeCard.css'

const PokeCard = (props) => {
  const [pokemon, setPokemon] = React.useState("");

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [props.pokemon]);

  const pegaPokemon = (nomePokemon) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => console.log(err.data));
  };

  return (
    <div className="container">
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} KG</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt="Foto do Pokemon" />
      )}
    </div>
  );
};

export default PokeCard;
