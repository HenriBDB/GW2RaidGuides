import React from 'react';
import PropTypes from 'prop-types';

const TraitCard = (props) => {
    return (
        <div className="trait-card">
            <div className="trait-name">
                <span data-armory-embed="traits" data-armory-size="40" data-armory-inline-text="wiki" data-armory-ids={props.traitID}></span>
                <div className="filler"></div>
            </div>
            <div className="trait-description">
                {props.children}
            </div>
        </div>
    );
}

export default TraitCard;

TraitCard.propTypes = {
    traitID: PropTypes.number
}