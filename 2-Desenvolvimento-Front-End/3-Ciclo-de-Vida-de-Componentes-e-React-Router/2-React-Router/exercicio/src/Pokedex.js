import React, { Component } from 'react';
import Pokemon from './Pokemon';
import Button from './Button';

class Pokedex extends Component {
  constructor() {
    super();
    this.state = {
      pokemonIndex: 0,
      filteredType: 'all'
    }
  }

  filterPokemons(filteredType) {
    this.setState({ filteredType, pokemonIndex: 0 });
  }

  nextPokemon(numberOfPokemons) {
    this.setState(state => ({
      pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons
    }));
  }

  fetchFilteredPokemons() {
    const { pokemons } = this.props;
    const { filteredType } = this.state;

    return pokemons.filter(pokemon => {
      if (filteredType === 'all') return true;
      return pokemon.type === filteredType;
    });
  }

  fetchPokemonTypes() {
    const { pokemons } = this.props;

    return [...new Set(pokemons.reduce((types, { type }) => [...types, type], []))]
  }

  render() {
    const filteredPokemons = this.fetchFilteredPokemons();
    const pokemonTypes = this.fetchPokemonTypes();
    const pokemon = filteredPokemons[this.state.pokemonIndex];

    return (
      <div>
        <Pokemon pokemon={pokemon} />
        <div>
          <Button onClick={() => this.filterPokemons('all')}>All</Button>
          {pokemonTypes.map(type => (
            <Button
              key={type}
              onClick={() => this.filterPokemons(type)}
              className="filter-button">
              {type}
            </Button>
          ))}
        </div>
        <Button onClick={() => this.nextPokemon(filteredPokemons.length)} disabled={filteredPokemons.length <= 1}>Proximo</Button>
      </div>
    );
  }
}

export default Pokedex;
