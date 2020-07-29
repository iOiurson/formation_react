import React from 'react';

import Pokemon from './Pokemon';

import './PokemonList.scss';

class PokemonList extends React.Component {
  render() {
    const { pokemons } = this.props;

    const content = pokemons.map(pokemon => (
      <Pokemon
        name={pokemon.name}
        weight={pokemon.weight}
        src={pokemon.sprites.front_default}
        types={pokemon.types}
        key={pokemon.id}
      />
    ));

    return <ul className='PokemonList'>{content}</ul>;
  }
}

export default PokemonList;
