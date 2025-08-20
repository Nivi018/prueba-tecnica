import React from "react";
import "../css/Header.css";
import image from "../img/pokedex-main.png";

export const Header = ({ search, setSearch }) => {
  return (
    <header className="header ">
      <div className=" main-content div__header">
        {" "}
        <h1>Pokedex</h1>
        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
      </div>
      <img
          className="imagen-logo"
          src={image}
          title="pokedex"
          alt="pokemon"
        />
    </header>
  );
};
