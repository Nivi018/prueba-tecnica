import React from "react";
import "../css/PokemonCard.css";


export const PokemonCard = ({ name, image, types }) => {
  return (
    <div className="pokemon-card">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <div className="pokemon-types">
        {types.map((type, index) => (
          <span key={index} className={`type ${type}`}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}
