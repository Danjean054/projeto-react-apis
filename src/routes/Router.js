import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import PokemonDetailPage from "../pages/PokemonDetailPage/PokemonDetailPage";
import PokedexPage from "../pages/PokemonPage/PokedexPage";
import PokemonsListPage from "../pages/PokemonsListPage/PokemonsListPage";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";

const Router = () => {
  const [pokePage, setPage] = useState([]);
  const [pokeList, setPokeList] = useState([]);
  const [pokeDetail,setPokeDetail] = useState({})
  

  useEffect(() => {
    getListPoke();
  }, []);

  const getListPoke = () => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        setPage(res.data.results);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const addPokedex = (pokemonAdd) => {
    const insertPokemon = pokeList.find(
      (pokedex) => pokedex.name === pokemonAdd.name
    );
    if (!insertPokemon) {
      const newPokedex = [...pokeList, pokemonAdd];
      setPokeList(newPokedex);
    }
  };

  const removePokemon = (pokemonDelete) => {
    const newPokedex = pokeList.filter(
      (pokedex) => pokedex.name !== pokemonDelete.name
    );
    setPokeList(newPokedex);
  };

  const detailPokedex = (pokemon) => {
    setPokeDetail(pokemon);
      
  };
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          index
          path={"/"}
          element={
            <PokedexPage
              addPokedex={addPokedex}
              pokeList={pokeList}
              pokePage={pokePage}
              setPokeDetail = {setPokeDetail}
            />
          }
        />
        <Route
          path={"PokeDetail"}
          element={<PokemonDetailPage pokeDetail = {pokeDetail}  />}
        />
        <Route
          path={"PokeList"}
          element={
            <PokemonsListPage
              pokeList={pokeList}
              removePokemon={removePokemon}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
