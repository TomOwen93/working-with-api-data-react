import { filterPokemon } from "./pokemon-filter";

test.skip("check type of pokemon", () => {
  expect(filterPokemon([], "psychic")).toEqual([]);
});
