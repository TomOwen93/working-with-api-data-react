import PokemonContainer from "./PokemonContainer";
import { PokemonMain } from "../utils/data-main-pokemon";
import { PokemonSpecies } from "../utils/data-species-pokemon";

interface MainContentProps {
  pokemonsArray: (PokemonMain & PokemonSpecies)[];
  handleFavourites: (pokemon: PokemonMain & PokemonSpecies) => void;
}

function MainContainer({
  pokemonsArray,
  handleFavourites,
}: MainContentProps): JSX.Element {
  return (
    <>
      {pokemonsArray.map((pokemon, index) => (
        <PokemonContainer
          key={index}
          pokemon={pokemon}
          handleFavourites={handleFavourites}
        />
      ))}
    </>
  );
}

export default MainContainer;
