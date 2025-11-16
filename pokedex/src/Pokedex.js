import React, { useState, useEffect } from 'react';

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        if (!res.ok) {
          throw new Error('Failed to fetch Pokemon data');
        }
        const data = await res.json();
        setPokemon(data.results);
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
        setError('Failed to load Pokemon. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  const filteredPokemon = pokemon.filter(p => p.name.includes(search.toLowerCase()));

  if (loading) {
    return (
      <div>
        <h1>Pokedex</h1>
        <p>Loading Pokemon...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Pokedex</h1>
        <p style={{ color: 'red' }}>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Pokedex</h1>
      <input
        type="text"
        placeholder="Search Pokémon"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="pokemon-list">
        {filteredPokemon.length > 0 ? (
          filteredPokemon.map((poke) => (
            <PokemonCard key={poke.name} pokemon={poke} />
          ))
        ) : (
          <p>No Pokemon found matching "{search}"</p>
        )}
      </div>
    </div>
  );
};

const PokemonCard = ({ pokemon }) => {
  const [imgError, setImgError] = useState(false);
  
  // Extract the Pokémon ID from the URL
  const getIdFromUrl = (url) => {
    const parts = url.split('/').filter(Boolean);
    return parts[parts.length - 1];
  };
  const id = getIdFromUrl(pokemon.url);
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="pokemon-card">
      <h3 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h3>
      {!imgError ? (
        <img 
          src={imageUrl} 
          alt={pokemon.name}
          onError={() => setImgError(true)}
          loading="lazy"
        />
      ) : (
        <div style={{ width: '96px', height: '96px', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
          <span style={{ fontSize: '12px', color: '#666' }}>No image</span>
        </div>
      )}
      <p>ID: #{id}</p>
    </div>
  );
};

export default Pokedex;
