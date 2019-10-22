import React from 'react';
import Pokemon from './Pokemon'


class PokemonList extends React.Component {
  render() {
    const {pokemons , inputPokemon} = this.props
    return (
      <div>
        <ul className="pokemon__list">
          {pokemons
          .filter(pokemon => pokemon.name.toUpperCase().includes(inputPokemon.toUpperCase()))
          .map(pokemon =>{
            return(
              <li className="pokemon__item" key={pokemon.name}>
                <Pokemon pokemon={pokemon}/>
              </li>
            );
          })}
        </ul>
        
        
      </div>
    );

  }
}

export default PokemonList;