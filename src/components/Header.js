import React from "react";
import  "../css/Header.css";

export const Header = ({search, setSearch}) => {
  return (
    <header className="header ">
      <h1>Pokedex</h1>
      <input type="text" placeholder="Buscar..."
      value={search} 
      onChange={(e) => setSearch(e.target.value)} />
    </header>
  );
}


