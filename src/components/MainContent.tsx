import PokemonContainer from "./PokemonContainer";

function MainContent(pokemon: any): JSX.Element {
  return (
    <>
      <PokemonContainer
        name={pokemon.name}
        image={pokemon.image}
      />
      <hr />
    </>
  );
}
export default MainContent;
