const Pokedex = ({ pokedex, removeClick, showPokemon }) => {
  return (
    <div className="pokedex">
      <h3>Il tuo Pokedex</h3>
      <div className="row pokedex__list">
        {pokedex.map((pokemon) => {
          const { id, name, sprites } = pokemon;
          return (
            <div className="column column-20 pokedex__item" key={id}>
              <p>{name}</p>
              <img src={sprites.front_default} alt="" />
              <button className="button" onClick={() => showPokemon(name)}>
                Mostra
              </button>
              <button
                className="button button-outline"
                onClick={() => removeClick(name)}
              >
                Elimina
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pokedex;
