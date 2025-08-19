import React from "react";
// import './Header.css'

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__tittle">
          <h1>Pokedex</h1>
        </div>
        <div className="header__search">
          <input type="text" />
          <button>Search</button>
        </div>
      </div>

      <div className="contenedor_cards">
        <div className="card">
          <p>Nombre del pokémon</p>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="pokemon"
          />
          <p>Tipos</p>
        </div>

        <div className="card">
          <p>Nombre del pokémon: <input type="text"/> </p>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
            alt="pokemon"
          />
          <p>Tipos</p>
        </div>

        <div className="card">
          <p>Nombre del pokémon</p>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
            alt="pokemon"
          />
          <p>Tipos</p>
        </div>
      </div>
    </>
  );
};
