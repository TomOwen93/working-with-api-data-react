import PageHeader from "./PageHeader";
import "../styles.css";
import { PokemonMain } from "../utils/data-main-pokemon";
import { PokemonSpecies } from "../utils/data-species-pokemon";
import { useState, useEffect, useRef } from "react";
import MainContainer from "./Main-Container";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import SearchInput from "./SearchInput";
import capitalize from "../utils/capitalize";
import { pokemonNames } from "../utils/pokemonNames";

// const filterOptions = ["type", "pokemon"];

export interface PokeName {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState("");
  const [submitValue, setSubmitValue] = useState<string>("1");
  const [searchedPokemon, setSelectedPokemon] = useState<
    (PokemonMain & PokemonSpecies)[]
  >([]);
  const [selectedFavourites, setSelectedFavourites] = useState<
    (PokemonMain & PokemonSpecies)[]
  >([]);
  const [activePage, setActivePage] = useState("Home");

  const containerRef = useRef<HTMLDivElement | null>(null);
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
    setSelectedPokemon((prevPokemons) => [...prevPokemons, combinedArrays]);
  };

  const handleInput = (event: string) => {
    console.log(event);
    setInputValue(event);
  };

  const handleUpdatePokes = async () => {
    if (!/^\d+$/.test(inputValue)) {
      const searchIndex = pokemonNames.results.findIndex(
        (element) => element.name === inputValue.toLocaleLowerCase()
      );
      const result = pokemonNames.results[searchIndex].url;
      const resultSliced = result
        .slice(result.length - 4)
        .replaceAll("/", "")
        .replaceAll("n", "");
      console.log(result.slice(result.length - 4));
      setSubmitValue(resultSliced);
    } else {
      setSubmitValue(inputValue);
    }
    setInputValue("");
  };

  const handleFavourites = (pokemon: PokemonMain & PokemonSpecies) => {
    console.log(pokemon);
    if (!selectedFavourites.includes(pokemon)) {
      setSelectedFavourites((prev) => [...prev, pokemon]);
    }
  };

  const handleRemoveAFavourite = (removed: PokemonMain & PokemonSpecies) => {
    setSelectedFavourites(
      selectedFavourites.filter((pokemon) => pokemon.id !== removed.id)
    );
  };

  const handleClearFavourites = () => setSelectedFavourites([]);

  useEffect(() => {
    fetchBoth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitValue]);

  const handlePage = (title: string) => setActivePage(title);

  console.log(selectedFavourites.length === 0 && activePage === "Home");
  console.log(
    selectedFavourites.length,
    selectedFavourites.length === 0,
    activePage,
    activePage === "Home"
  );

  return (
    <div className="app">
      <div
        className={`page-header${
          selectedFavourites.length === 0 || activePage !== "Home"
            ? ""
            : "-favourite-showing"
        }`}
      >
        <PageHeader handleClick={handlePage} />
      </div>

      {activePage === "Contact" && (
        <div className="page contact-page">
          <h2 style={{ color: "white" }}>--CONTACT--</h2>
        </div>
      )}

      {activePage === "FAQs" && (
        <div className="page FAQs-page">
          <h2 style={{ color: "white" }}>--FAQs--</h2>
        </div>
      )}

      {activePage === "Login" && (
        <div className="page contact-page">
          <h2 style={{ color: "white" }}>--LOGIN--</h2>
        </div>
      )}

      {activePage === "Home" && (
        <div className="page home-page">
          <div
            className={`input-and-button${
              selectedFavourites.length === 0 && activePage === "Home"
                ? ""
                : "-favourites-showing"
            }`}
          >
            <select
              onChange={(e) => handleInput(e.target.value)}
              ref={animationParent}
            >
              {pokemonNames.results.map((pokemon, index) => (
                <option key={index} value={capitalize(pokemon.name)}>
                  {" "}
                  {`${capitalize(pokemon.name)} - #${index + 1}`}{" "}
                </option>
              ))}
            </select>
            <SearchInput handleInput={handleInput} inputValue={inputValue} />
            <button onClick={handleUpdatePokes} className="button">
              Submit
            </button>
            <button onClick={handleClearFavourites} className="button">
              Clear Favourites
            </button>
          </div>

          <div
            className={`container${
              selectedFavourites.length === 0 && activePage === "Home"
                ? ""
                : "-favourite-showing"
            }`}
            ref={animationParent}
          >
            <MainContainer
              pokemonsArray={searchedPokemon}
              handleFavourites={handleFavourites}
              handleRemoveFavourites={handleRemoveAFavourite}
              ref={containerRef}
              type="main"
            />
          </div>
          {selectedFavourites.length > 0 && (
            <div className="favourites-container">
              <h1>Favourites:</h1>
              <MainContainer
                pokemonsArray={selectedFavourites}
                handleFavourites={handleFavourites}
                handleRemoveFavourites={handleRemoveAFavourite}
                type="favourites"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
