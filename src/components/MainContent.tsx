import PokemonContainer from "./PokemonContainer";
import { Stat, Stat2 } from "../Interfaces";

interface MainContentProps {
  abilities?: Ability[];
  name: string;
  image: string;
  stats: Stat[];
  poketypes: poketype[]
}

interface poketype{
slot: number,
type: {
  name: string,
  url?: string
}
}

interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

function MainContent(props: MainContentProps): JSX.Element {
  return (
    <>
      <PokemonContainer
        name={props.name}
        abilities={props.abilities}
        image={props.image}
        stats={props.stats}
        poketypes={props.poketypes}
      />
      <PokemonContainer
        name={props.name}
        abilities={props.abilities}
        image={props.image}
        stats={props.stats}
        poketypes={props.poketypes}
      />
      <PokemonContainer
        name={props.name}
        abilities={props.abilities}
        image={props.image}
        stats={props.stats}
        poketypes={props.poketypes}
      />
    </>
  );
}
export default MainContent;
