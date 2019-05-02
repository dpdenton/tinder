import React from 'react';
import PropTypes from "prop-types";

import Card from "./Card";
import ProfileImage from "./ProfileImage";
import ProfileName from "./ProfileName";
import ProfileRating from "./ProfileRating";

const Profile = props => {

    return (
        <Card>
            <ProfileImage
                src={props.image}
                alt={props.name}
            />
            <ProfileName
                name={props.name}
            />
            <ProfileRating
                confidence={props.confidence}
            />
        </Card>
    )
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    decision: PropTypes.bool,
    confidence: PropTypes.number
};

Profile.defaultProps = {
    decision: null,
    confidence: 0,
};

export default Profile;