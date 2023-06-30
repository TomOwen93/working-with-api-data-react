import PageHeader from "./components/PageHeader";
import "./styles.css";
import { pokemons } from "./data";
import { useState } from "react";
import MainContent from "./components/MainContent";

function App(): JSX.Element {
  const [pokemon, setPokemon] = useState(pokemons[0]);
  const [inputValue, setInputValue] = useState("");
  const [isShownButton, setIsShownButton] = useState(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButton = () => {
    const pokemonIndex = pokemons.findIndex((pokemon) =>
      pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    if (pokemonIndex === undefined) {
      setPokemon(pokemons[0]);
    }
    setPokemon(pokemons[pokemonIndex]);
  };

  return (
    <body>
      <PageHeader />
      <div className="input-and-button">
        <input className="input-box" onChange={handleInput}></input>
        <button className="button" onClick={handleButton}>
          Submit
        </button>
      </div>
      <div className="container">
        <MainContent
          name={pokemon.name}
          abilities={pokemon.abilities}
          image={pokemon.sprites.front_default}
          stats={pokemon.stats}
        />
      </div>
    </body>
  );
}

export default App;
