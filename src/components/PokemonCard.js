import React from "react";
import "../css/PokemonCard.css";
import { typesColors } from "../components/colors";
import imagen from "../img/pokedex-main.png";
import {Oscuros}  from "../components/colors";

export const PokemonCard = ({ name, image, types }) => {
  const backgroundColor = typesColors[types[0]] || "#68A090";
  const darkColor = Oscuros[types[0]] || "#68A090";
  return (
    <div className="pokemon-card" style={{ backgroundColor, darkColor }}>
      <div className="pokemon-card__titulo">
        <h3>{name}</h3>
        <div className="pokemon-types">
          {types.map((type, index) => (
            <span
              key={index}
              className={`type ${type}`}
              style={{ backgroundColor: Oscuros[type] }}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className="pokemon-card__imagen" style={{ backgroundImage: `url(${imagen})` }}>
        {/* <img className="card-logo" src={imagen} /> */}

        <img className="imagen-pokemon" src={image} alt={name} />
      </div>
    </div>
  );
};
