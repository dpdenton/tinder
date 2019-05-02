import React from 'react';
import PropTypes from 'prop-types';

const style = {
    width: '100%'
};

const ProfileImage = props => {

    return (
        <div className='imgWrapper'>
            <img
                src={props.src}
                alt={props.name}
                draggable={false}
                style={style}
            />
        </div>
    )
};

ProfileImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default ProfileImage;