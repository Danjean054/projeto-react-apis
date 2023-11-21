import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { BASE_URL } from "../../constants/constants";
import { MainContainer, } from "./pokemonsListPageStyle";
const PokemonsListPage = (props) => {
  const { pokeList, removePokemon } = props;
  return (
    
      <MainContainer>
        <h1>Minha pokedex</h1>
        
     {pokeList.map((pokemon)=>(
      <PokemonCard
      key = {pokemon.name}
      removePokemon = {removePokemon}
      pokemonUrl = {`${BASE_URL}${pokemon.name}`}
      />
   
     ))}
     
      </MainContainer>
  
  );
};

export default PokemonsListPage;
