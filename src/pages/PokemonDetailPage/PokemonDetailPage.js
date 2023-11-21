import React, { useState } from "react";
import { MainContainer } from "./pokemonDetailPageStyle";

const PokemonDetailPage = ({ pokeDetail }) => {
  const [pokemon, setPokemon] = useState({});
  

  return (
    <MainContainer>
      <img src={pokeDetail.sprites?.front_default} alt={pokeDetail.name} />
    </MainContainer>
  );
};

export default PokemonDetailPage;
