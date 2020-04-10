import React from "react";
import nextId from "react-id-generator";

const PlayerCard = (props) => {
    return (
        <div className="cardContaniner">
            <h2 data-testid={nextId()}>Name: {props.name}</h2>
            <p data-testid={nextId()}>Country: {props.country}</p>
            <p data-testid={nextId()}>Searches: {props.searches}</p>
        </div>
    )
}

export default PlayerCard;