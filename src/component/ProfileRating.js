import React from 'react';
import {FaCheck, FaBan} from 'react-icons/fa';

const ProfileRating = props => {

    const negativeStyle = {
        opacity: 0.5 - props.confidence,
        height: 50,
        width: 50,
    };

    const positiveStyle = {
        opacity: 0.5 + props.confidence,
        height: 50,
        width: 50,
    };

    return (
        <div className='ratingWrapper'>

            <div className='negativeRating'>
                <FaBan
                    style={negativeStyle}
                />
            </div>
            <div className='positveRating'>
                <FaCheck
                    style={positiveStyle}
                />
            </div>

        </div>
    )
};

export default ProfileRating;