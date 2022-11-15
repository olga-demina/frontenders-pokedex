import { useState } from "react";

const PokemonDetails = ({ pokemon, addClick }) => {
  const [imageType, setImageType] = useState("default");

  const { name, height, weight, sprites, stats } = pokemon;

  return (
    <div className="pokemon">
      <h3>Ecco i tuoi risultati per [{name}]</h3>
      <div className="row pokemon__info">
        <p className="column">Nome: {name}</p>
        <p className="column">Peso: {weight}</p>
        <p className="column">Altezza: {height}</p>
      </div>
      <div className="row pokemon__details">
        <div className="column pokemon__image">
          <img src={sprites[`front_${imageType}`]} alt="" />
          <div className="pokemon__image-actions">
            <button
              className="button button-outline"
              onClick={() => {
                setImageType("default");
              }}
            >
              default
            </button>
            <button
              className="button button-outline"
              onClick={() => {
                setImageType("shiny");
              }}
            >
              Shiny
            </button>
          </div>
        </div>
        <div className="column pokemon__stats">
          <h4>Statistiche</h4>
          {stats.map((stat, index) => {
            return (
              <div className="pokemon__stats-item" key={index}>
                <p>{stat.stat.name}</p>
                <progress value={stat.base_stat} max="100"></progress>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pokemon__actions">
        <button onClick={addClick}>Aggiungi al pokedex</button>
      </div>
    </div>
  );
};

export default PokemonDetails;
