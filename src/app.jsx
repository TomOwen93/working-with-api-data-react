// import PageHeader from "./components/PageHeader";
// import "./styles.css";
import { pokemons } from "./data";
import { useState } from "react";
import MainContent from "./components/MainContent";

function App(){
  const [pokemon, setPokemon] = useState(pokemons[0]);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  // const handleButton = () => {
  //   const pokemonIndex = pokemons.findIndex((pokemon) =>
  //     pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
  //   );

  //   if (pokemonIndex === undefined) {
  //     setPokemon(pokemons[0]);
  //   }
  //   setPokemon(pokemons[pokemonIndex]);
  // };

  const handleButton = () => {
    setPokemon(pokemons.filter((el) => el.types.filter(el => el.type.name === inputValue)))
  }

  console.log(pokemon)
  
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
         {pokemon}
        />
      </div>
    </body>
  );
}

export default App;
