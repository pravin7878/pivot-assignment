import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';

// Define the structure for Pokémon API responses
interface PokemonListResponse {
  results: {
    name: string;
    url: string;
  }[];
}

interface PokemonDetails {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

const PokedexGrid: React.FC = () => {
  const API = 'https://pokeapi.co/api/v2/pokemon?limit=24';
  const [pokemonData, setPokemonData] = useState<PokemonDetails[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch detailed Pokémon data
  const fetchPokemonDetails = async (pokemonList: PokemonListResponse['results']): Promise<PokemonDetails[]> => {
    return Promise.all(
      pokemonList.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data: PokemonDetails = await res.json();
        return data;
      })
    );
  };

  // Main fetch function
  const fetchPokemon = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(API);
      if (!res.ok) throw new Error('Failed to fetch Pokémon list');
      
      const data: PokemonListResponse = await res.json();
      const detailedData = await fetchPokemonDetails(data.results);
      setPokemonData(detailedData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="p-4">
      {isLoading ? (
        <p className="text-center text-gray-500">Loading Pokémon...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error}</p>
      ) : (
        <div className="w-[90%] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {pokemonData.map((pokemon) => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PokedexGrid;
