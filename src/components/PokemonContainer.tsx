import { useState } from "react";
import { Stat, Stat2 } from "../Interfaces";
import { PokemonMain, pokemonsMain } from "../utils/data-main-pokemon";
import { PokemonSpecies } from "../utils/data-species-pokemon";

interface PokemonContainerProps {
  pokemon: PokemonMain & PokemonSpecies;
  handleFavourites?: (pokemon: PokemonMain & PokemonSpecies) => void;
}

export function PokemonContainer({
  pokemon,
  handleFavourites,
}: PokemonContainerProps): JSX.Element {
  const [isShownImgDesc, setIsShownImgDesc] = useState(false);

  return (
    <div className="pokemon-info" onMouseEnter={() => setIsShownImgDesc(true)}>
      <h1 className="pokemon-name">{capitalize(pokemon.name)}</h1>
      <img className="pokemon-image" src={pokemon.sprites.front_default} />

      <div className="pokemon-stats">
        <div>
          <h2> Evolutions: </h2>
          {pokemon.evolves_from_species !== null && (
            <ul>
              <li>{capitalize(pokemon.evolves_from_species.name)}</li>
            </ul>
          )}
        </div>
        <h2> Base Stats</h2>
        <ul>
          {pokemon.stats.map((stat, index) => (
            <li key={index}>
              {capitalize(stat.stat.name)} - {stat.base_stat}{" "}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleFavourites && (() => handleFavourites(pokemon))}>
        Add Favourite
      </button>
    </div>
  );
}

function capitalize(str: string): string | undefined {
  if (str === undefined) {
    return "";
  }
  return str[0].toUpperCase() + str.slice(1);
}

export default PokemonContainer;
