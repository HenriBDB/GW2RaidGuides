import React from 'react';
import PropTypes from 'prop-types';

const GearCard = (props) => {
    return (
        <div className="gear-card">
            <div className="gear-name">
                <span>{props.text}</span>
                <div className="filler"></div>
            </div>
            <div className="gear-description">
                {props.children}
            </div>
        </div>
    );
}

export default GearCard;

GearCard.propTypes = {
    text: PropTypes.array
}