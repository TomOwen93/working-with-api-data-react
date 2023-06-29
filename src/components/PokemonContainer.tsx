import { useState } from "react";

interface PokemonProps {
  name: string;
  image?: string;
}

export function PokemonContainer({ name, image}: PokemonProps): JSX.Element {
  const [isShownImgDesc, setIsShownImgDesc] = useState(false);

  return (
    <div className="pokemon-info">
      <h1 className="pokemon-name">{capitalize(name)}</h1>
      <img className="pokemon-image"
      onMouseEnter={() => setIsShownImgDesc(true)} 
      onMouseLeave={() => setIsShownImgDesc(false)} 
      src={image}> 
      img 
      </img>
     {isShownImgDesc && <div>I'll appear when you hover over the button.</div>}

    </div>
  );
}

function capitalize(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}

export default PokemonContainer;
