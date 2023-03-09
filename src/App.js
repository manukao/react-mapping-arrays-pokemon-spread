import React from "react";
import PokemonCard from "./components/PokemonCard";
import "./App.css";
import "./styles.css";
import pokemons from "./components/pokemonsData";

export default function App() {
  return (
    <main className="app">
      <h1 className="app__title">Pokédex</h1>
      <ul className="app__pokemons">
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <PokemonCard {...pokemon} />
          </li>
        ))}
      </ul>
    </main>
  );
}
