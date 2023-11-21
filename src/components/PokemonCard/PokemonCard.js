import { useLocation, useNavigate } from "react-router-dom";
import { MainContainer, Img, Button, Div, Span } from "./pokemonCardStyle";
import { useEffect, useState } from "react";
import axios from "axios";
import { goToPokeDetail } from "../../routes/coordinator";

const PokemonCard = (props) => {
  const { removePokemon, addPokedex, pokemonUrl, setPokeDetail } = props;

  const location = useLocation();

  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    getPokemonUrl();
  }, []);

  const getPokemonUrl = () => {
    axios
      .get(pokemonUrl)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <MainContainer>
      <Img src={pokemon.sprites?.front_default} alt={pokemon.name} />

      <Div>
        <Span
          onClick={() => {
            setPokeDetail(pokemon);
            goToPokeDetail(navigate);
          }}
        >
          Detalhes
        </Span>
        {location.pathname === "/" ? (
          <Button onClick={() => addPokedex(pokemon)}>Capturar</Button>
        ) : (
          <Button onClick={() => removePokemon(pokemon)}>
            Libertar o pokemon
          </Button>
        )}
      </Div>
    </MainContainer>
  );
};

export default PokemonCard;
