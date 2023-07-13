import React from 'react';

function StarShipCard(props){

    return (
        <div className='starship-container'>
            <h1>{props.name}</h1>
            <h5>Price: {props.cost_in_credits} credits</h5>
        </div>
    );
};

export default StarShipCard;