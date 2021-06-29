import React from 'react'
import Data from './Data'
import Pokemon from './Pokemon'
import './Pokedex.css'

class Pokedex extends React.Component {
    render() {
        return (
            <main>
                <h1>Pokedex</h1>
                <div className="Pokedex">
                    {Data.map(pokemon =>
                        <Pokemon key={pokemon.id}
                            name={pokemon.name}
                            type={pokemon.type}
                            weight={pokemon.averageWeight}
                            image={pokemon.image}
                        />)}
                </div>
            </main>
        )
    }
}


export default Pokedex;