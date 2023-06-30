import { useState } from "react";
import { Stat, Stat2 } from "../Interfaces";

interface PokemonContainerProps {
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

interface stat {
  stat: string;
}

interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export function PokemonContainer({
  name,
  image,
  abilities,
  stats,
}: PokemonContainerProps): JSX.Element {
  const [isShownImgDesc, setIsShownImgDesc] = useState(false);

  return (
    <div
      className="pokemon-info"
      onMouseEnter={() => setIsShownImgDesc(true)}>
      <h1 className="pokemon-name">{capitalize(name)}</h1>
      <img className="pokemon-image" src={image}></img>
      {isShownImgDesc && (
        <div className="pokemon-stats">
          <div>
            <h2 className="pokemon-stat-title"> Abilities</h2>
            <ol>
              {abilities &&
                abilities.map((el) => (
                  <li key={el.ability.name}>{capitalize(el.ability.name)}</li>
                ))}
            </ol>{" "}
          </div>
          <h2> Base Stats</h2>
          <ul>
            {stats &&
              stats.map((el) => (
                <li key={el.stat.name}>
                  {capitalize(el.stat.name)} - {el.base_stat}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function capitalize(str: string): string | undefined {
  if (str === undefined) {
    // Handle the case when str is undefined
    return "";
  }
  return str[0].toUpperCase() + str.slice(1);
}

export default PokemonContainer;
