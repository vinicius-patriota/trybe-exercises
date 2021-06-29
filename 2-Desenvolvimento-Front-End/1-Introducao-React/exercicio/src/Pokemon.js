import React from 'react'
import './Pokemon.css'

class Pokemon extends React.Component {
    render() {
        const name = this.props.name;
        const type = this.props.type;
        const { value: weight, measurementUnit } = this.props.weight;
        const image = this.props.image;

        return (
            <div className="Pokemon">
                <div className="Info">
                    <p>{name}</p>
                    <p>{type}</p>
                    <p>Average weight: {weight} {measurementUnit}</p>
                </div>
                <img src={image} alt={name}></img>
            </div>
        )
    }
}

export default Pokemon;