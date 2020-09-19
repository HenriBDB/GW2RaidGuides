import React from 'react';
import PropTypes from 'prop-types';

const TraitCard = (props) => {
    return (
        <div class="trait-card">
            <div class="trait-name">
                <span data-armory-embed="traits" data-armory-size="40" data-armory-inline-text="wiki" data-armory-ids={props.traitID}></span>
                <div class="filler"></div>
            </div>
            <div class="trait-description">
                {props.children}
            </div>
        </div>
    );
}

export default TraitCard;

TraitCard.propTypes = {
    traitID: PropTypes.number
}