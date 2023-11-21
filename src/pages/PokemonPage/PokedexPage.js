import { DivImage, MainContainer, H1 } from "./pokedexPageStyle";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

const PokedexPage = (props) => {
  const { addPokedex, pokeList, pokePage, setPokeDetail } = props;

  const filterPokelist = () =>
    pokePage.filter(
      (pokemon) => !pokeList.find((pokedex) => pokemon.name === pokedex.name)
    );

  return (
    <MainContainer>
      <H1>Todos os pokemons</H1>

      
        <DivImage>
          {filterPokelist().map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              pokemonUrl={pokemon.url}
              addPokedex={addPokedex}
              setPokeDetail={setPokeDetail}
            />
          ))}
        </DivImage>
      
    </MainContainer>
  );
};

export default PokedexPage;
