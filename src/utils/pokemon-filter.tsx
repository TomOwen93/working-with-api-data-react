import { PokemonMain } from "./data-main-pokemon";

export function filterPokemon(
  pokemonArr: PokemonMain[],
  soughtType: string
): PokemonMain[] {
  const newPokemons = pokemonArr.filter((el) =>
    el.types.some((el) => el.type.name === soughtType)
  );
  console.log(newPokemons);
  return newPokemons;
}
