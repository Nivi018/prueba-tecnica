import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Header } from "./components/Header";
import { PokemonCard } from "./components/PokemonCard";
import { useState, useEffect } from "react";
import { PokemonModal } from "./components/PokemonModal";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100")
      .then((res) => res.json())
      .then(async (data) => {
        const detailedPokemons = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            return {
              name: details.name,
              image: details.sprites.front_default,
              types: details.types.map((t) => t.type.name),
              height: details.height,
              weight: details.weight,
              abilities: details.abilities.map((a) => a.ability.name),
              stats: details.stats,
            };
          })
        );
        setPokemons(detailedPokemons);
      });
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  }); 

  return (
    <div>
      <Header search={search} setSearch={setSearch}/>

      <main className="main-content">
        <div className="pokemon-grid">
          {filteredPokemons.map((poke, index) => (
            <div
              key={index}
              className="pokemon-card-wrapper"
              onClick={() => setSelectedPokemon(poke)}
            >
              <PokemonCard
                name={poke.name}
                image={poke.image}
                types={poke.types}
              />
            </div>
          ))}
        </div>
      </main>

      {/* Modal con Bootstrap */}
      <PokemonModal
        pokemon={selectedPokemon}
        onClose={() => setSelectedPokemon(null)}
      />
    </div>
  );
}

export default App;