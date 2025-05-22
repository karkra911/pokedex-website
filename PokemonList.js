import React, { useEffect, useState } from 'react';
import './App.css'; // <-- make sure this line is here!

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [allTypes, setAllTypes] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await response.json();

        const detailedPokemon = await Promise.all(
          data.results.map(async (poke) => {
            const res = await fetch(poke.url);
            return res.json();
          })
        );

        setPokemon(detailedPokemon);
        setLoading(false);

        // Extract all unique types
        const typesSet = new Set();
        detailedPokemon.forEach(p => {
          p.types.forEach(t => typesSet.add(t.type.name));
        });
        setAllTypes(['All', ...Array.from(typesSet)]);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
        setLoading(false);
      }
    }

    fetchPokemon();
  }, []);

  const filteredPokemon = pokemon.filter(poke => {
    const matchesSearch = poke.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || poke.types.some(t => t.type.name === selectedType);
    return matchesSearch && matchesType;
  });

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '50px', fontSize: '24px' }}>Loading...</p>;
  }

  return (
    <div>
      <h1>Pokedex</h1>

      {/* Search and Filter */}
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          {allTypes.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Pokémon Cards */}
      <div className="pokemon-container">
        {filteredPokemon.length > 0 ? (
          filteredPokemon.map((poke) => (
            <div key={poke.id} className="pokemon-card">
              <h3>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h3>
              <img src={poke.sprites.front_default} alt={poke.name} />
              <p>ID: {poke.id}</p>
              <p>Type: {poke.types.map(t => t.type.name).join(', ')}</p>
            </div>
          ))
        ) : (
          <p className="empty-message">No Pokémon found.</p>
        )}
      </div>
    </div>
  );
}

export default PokemonList;
