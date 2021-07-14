import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pokemon extends Component {
  render() {
    const {
      pokemon: {
        averageWeight: {
          measurementUnit,
          value
        },
        name,
        type,
        id,
        image
      },
      showDetailsLink,
      isFavorite
    } = this.props;

    return (
      <div>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weight: {`${value} ${measurementUnit}`}</p>
          {showDetailsLink && <Link to={`pokemons/${id}`}>More details</Link>}
        </div>
        <img src={image} alt={`${name} sprite`} />
        {isFavorite && (
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png" alt={`${name} is marked as favorite`} />
        )}
      </div>
    );
  }
}

export default Pokemon;
