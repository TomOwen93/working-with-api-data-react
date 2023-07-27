import { PokemonMain } from "../utils/data-main-pokemon";
import { PokemonSpecies } from "../utils/data-species-pokemon";
import capitalize from "../utils/capitalize";
import { forwardRef } from "react";

interface PokemonContainerProps {
  pokemon: PokemonMain & PokemonSpecies;
  handleFavourites?: (pokemon: PokemonMain & PokemonSpecies) => void;
  handleRemoveFavourites?: (pokemon: PokemonMain & PokemonSpecies) => void;
  backgroundColor: string[];
  index: number;
  type: string;
}

export const PokemonContainer = forwardRef<
  HTMLDivElement,
  PokemonContainerProps
>(
  (
    {
      pokemon,
      handleFavourites,
      handleRemoveFavourites,
      backgroundColor,
      index,
      type,
    },
    ref
  ): JSX.Element => {
    return (
      <>
        {type !== "favourites"}
        <div
          className="pokemon-info"
          style={{ backgroundColor: backgroundColor[index] }}
        >
          <h1 className="pokemon-name">{capitalize(pokemon.name)}</h1>
          <img
            className="pokemon-image"
            style={{ backgroundColor: backgroundColor[index] }}
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />

          <div className="pokemon-stats">
            <div>
              <h2> Evolutions: </h2>
              {pokemon.evolves_from_species !== null && (
                <ul className="stats-list">
                  <li>{capitalize(pokemon.evolves_from_species.name)}</li>
                </ul>
              )}
            </div>
            <h2> Base Stats</h2>
            <ul className="stats-list">
              {pokemon.stats.map((stat, index) => (
                <li key={index}>
                  {capitalize(stat.stat.name)} - {stat.base_stat}{" "}
                </li>
              ))}
            </ul>
          </div>
          {type === "main" && (
            <button
              className="favourite-button"
              onClick={handleFavourites && (() => handleFavourites(pokemon))}
            >
              Add Favourite
            </button>
          )}

          {type === "favourites" && (
            <button
              className="favourite-button"
              onClick={
                handleRemoveFavourites &&
                (() => handleRemoveFavourites(pokemon))
              }
            >
              Remove Favourite
            </button>
          )}

          {index !== 0 && type !== "favourites" && (
            <div ref={ref} className="wavey">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  className="shape-fill"
                  style={{ fill: backgroundColor[index - 1] }}
                ></path>
              </svg>
            </div>
          )}
        </div>
      </>
    );
  }
);

PokemonContainer.displayName = `PokemonContainer`;
