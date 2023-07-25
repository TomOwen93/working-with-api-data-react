import { filterPokemon } from "./pokemon-filter";

test("", () => {
  expect(filterPokemon([], "psychic")).toEqual([]);
});
