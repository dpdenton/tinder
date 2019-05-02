import React from 'react';
import PropTypes from 'prop-types';

const ProfileName = props => {

    return (
        <div className='workName'>
            <h1>{props.name}</h1>
        </div>
    )
};

ProfileName.propTypes = {
    name: PropTypes.string.isRequired,
};

export default ProfileName;