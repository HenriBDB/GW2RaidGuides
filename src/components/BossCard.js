import React from 'react';
import PropTypes from 'prop-types';

const BossCard = (props) => {
    return (
        <div className={"boss-card " + props.gameClass}>
            <div className="boss-name">
                <img src={props.src} width="40" height="40" />
                <div className="boss-name-details">{props.bossName}</div>
                <div className="filler"></div>
            </div>
            <div className="boss-description">
                {props.children}
            </div>
        </div>
    );
}

export default BossCard;

BossCard.propTypes = {
    gameClass: PropTypes.string,
    src: PropTypes.string,
    bossName: PropTypes.string
}
