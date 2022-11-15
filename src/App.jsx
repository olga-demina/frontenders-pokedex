import "./App.css";
import SearchBar from "./components/SearchBar";
import PokemonDetails from "./components/PokemonDetails";
import Pokedex from "./components/Pokedex";
import { useEffect, useState } from "react";

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedPokedex = JSON.parse(localStorage.getItem("pokedex"));
    if (savedPokedex.length > 0) {
      startSearch(savedPokedex[0].name);
    }
    setPokedex(savedPokedex);
  }, []);

  async function startSearch(searchKey) {
    if (searchKey) {
      try {
        setError("");
        const result = await (
          await fetch(`https://pokeapi.co/api/v2/pokemon/${searchKey}`)
        ).json();
        console.log(result);
        setPokemon(result);
      } catch (error) {
        setPokemon(null);
        setError(`Non abbiamo trovato il pokemon ${searchKey}. Riprova.`);
      }
    }
  }

  function addToPokedex() {
    const hasPokemon = pokedex.find((item) => item.name === pokemon.name);
    if (!hasPokemon && pokedex.length < 10) {
      const newPokedex = [pokemon, ...pokedex];
      updatePokedex(newPokedex);
    }
  }

  function removeFromPokedex(name) {
    const newPokedex = pokedex.filter((pokemon) => pokemon.name !== name);
    updatePokedex(newPokedex);
  }

  function updatePokedex(newPokedex) {
    localStorage.setItem("pokedex", JSON.stringify(newPokedex));
    setPokedex(newPokedex);
  }

  return (
    <main>
      <div className="container">
        <SearchBar performSearch={startSearch} />
        <section>
          {error ? (
            <h3>
              Sorry, we didn't find what you were looking for. Try with anoter
              name dsf
            </h3>
          ) : (
            pokemon && (
              <PokemonDetails pokemon={pokemon} addClick={addToPokedex} />
            )
          )}
        </section>
        <section>
          <Pokedex
            pokedex={pokedex}
            removeClick={removeFromPokedex}
            showPokemon={startSearch}
          />
        </section>
      </div>
    </main>
  );
}

export default App;
