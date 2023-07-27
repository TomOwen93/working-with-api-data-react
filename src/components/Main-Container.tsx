import { PokemonContainer } from "./PokemonContainer";
import { PokemonMain } from "../utils/data-main-pokemon";
import { PokemonSpecies } from "../utils/data-species-pokemon";
import { getRandomColorStatic } from "../utils/random-colour";
import { useRef, forwardRef } from "react";

interface MainContentProps {
  pokemonsArray: (PokemonMain & PokemonSpecies)[];
  handleFavourites: (pokemon: PokemonMain & PokemonSpecies) => void;
  handleRemoveFavourites: (pokemon: PokemonMain & PokemonSpecies) => void;
  type: string;
}

const colourChoice: string[] = [];

const MainContainer = forwardRef<HTMLDivElement, MainContentProps>(
  (
    { pokemonsArray, handleFavourites, handleRemoveFavourites, type },
    ref
  ): JSX.Element => {
    for (let i = 0; i < pokemonsArray.length; i++) {
      colourChoice.push(getRandomColorStatic());
    }

    const containerRef = useRef<HTMLDivElement | null>(null);
    console.log(pokemonsArray.length);

    return (
      <>
        {pokemonsArray.map((pokemon, index) => (
          <PokemonContainer
            key={index}
            pokemon={pokemon}
            handleFavourites={handleFavourites}
            handleRemoveFavourites={handleRemoveFavourites}
            backgroundColor={colourChoice}
            index={index}
            ref={index === pokemonsArray.length - 1 ? containerRef : null}
            type={type}
          />
        ))}
      </>
    );
  }
);

MainContainer.displayName = `mainContainer`;

export default MainContainer;
