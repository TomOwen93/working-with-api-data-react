import PageHeader from "./PageHeader";
import "../styles.css";
import { PokemonMain } from "../utils/data-main-pokemon";
import { PokemonSpecies } from "../utils/data-species-pokemon";
import { useState, useEffect } from "react";
import MainContainer from "./Main-Container";
import { filterPokemon } from "../utils/pokemon-filter";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const filterOptions = ["type", "pokemon"];

function App(): JSX.Element {
  const [pokemonArray, setPokemonArray] = useState<
    (PokemonMain & PokemonSpecies)[]
  >([]);
  const [inputValue, setInputValue] = useState("");
  const [submitValue, setSubmitValue] = useState("1");
  // const [pokemonSpeciesArray, setPokemonSpeciesArray] = useState<PokemonSpecies[]>([]);
  const [favouritesArray, setFavouitesArray] = useState<
    (PokemonMain & PokemonSpecies)[]
  >([]);

  const [animationParent] = useAutoAnimate();

  const fetchPokemonsMain = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${submitValue.toLowerCase()}`
    );
    const jsonBody = await response.json();
    return jsonBody;
  };

  const fetchPokemonsSpecies = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${submitValue.toLowerCase()}`
    );
    const jsonBody = await response.json();
    return jsonBody;
  };

  const fetchBoth = async () => {
    const tempArrayMain = await fetchPokemonsMain();
    const tempArraySpecies = await fetchPokemonsSpecies();
    const combinedArrays = { ...tempArrayMain, ...tempArraySpecies };
    setPokemonArray((prev) => [...prev, combinedArrays]);
  };

  const handleInput = (event: string) => {
    setInputValue(event);
  };

  const handleUpdatePokes = () => {
    setSubmitValue(inputValue);
  };

  const handleFavourites = (pokemon: PokemonMain & PokemonSpecies) => {
    console.log(pokemon);
    setFavouitesArray((prev) => [...prev, pokemon]);
  };

  useEffect(() => {
    fetchBoth();
  }, [submitValue]);

  if (pokemonArray.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="site-grid">
      <div className="header">
        <PageHeader />
      </div>
      <div className="input-and-button">
      <input
        className="input-box"
        onChange={(e) => handleInput(e.target.value)}
      ></input>
      <button onClick={handleUpdatePokes} className="button">
        Submit
      </button>
      </div>
      <div className="container" ref={animationParent}>
        <MainContainer
          pokemonsArray={pokemonArray}
          handleFavourites={handleFavourites}
        />
      </div>
      <div className="favourites-container">
        <MainContainer
          pokemonsArray={favouritesArray}
          handleFavourites={handleFavourites}
        />
      </div>
    </div>
  );
}

export default App;
