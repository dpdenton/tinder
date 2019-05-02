import React from 'react';

const style = {
    backgroundColor: 'white',
    border: 'thin solid red',
    margin: 20,
};

const Card = props => {

    return (
        <div
            className='card'
            style={style}
        >
            {props.children}
        </div>
    )
};

export default Card;