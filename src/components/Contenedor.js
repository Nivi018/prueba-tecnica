
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card">
      <h3>{pokemon.name}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
};
export const Contenedor = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100');
        const pokemonData = response.data.results;
        // Obtener detalles de cada Pokémon
        const detailedPokemons = await Promise.all(
          pokemonData.map(async (pokemon) => {
            const detailResponse = await axios.get(pokemon.url);
            return detailResponse.data;
          })
        );
        setPokemons(detailedPokemons);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };
    fetchPokemons();
  }, []);
  return (
    <div className="App">
      <h1>Pokédex</h1>
      <div className="card-container">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

