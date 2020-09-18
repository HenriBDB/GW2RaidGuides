import React from 'react';
import PropTypes from 'prop-types';

const TraitCard = (props) => {
    return (
        <div class="card trait-card-2">
            <div class="card-header">
                <span data-armory-embed="traits" data-armory-size="40" data-armory-inline-text="wiki" data-armory-ids={props.traitID}></span>
                <div class="filler"></div>
            </div>
            <div class="card-body">
                {props.children}
            </div>
        </div>
    );
}

export default TraitCard;

TraitCard.propTypes = {
    traitID: PropTypes.number
}