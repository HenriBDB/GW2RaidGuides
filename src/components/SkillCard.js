import React from 'react';
import PropTypes from 'prop-types';

const SkillCard = (props) => {
    return (
        <div className="trait-card">
            <div className="trait-name">
                <span data-armory-embed="skills" data-armory-size="40" data-armory-inline-text="wiki" data-armory-ids={props.skillID}></span>
                <div className="filler"></div>
            </div>
            <div className="trait-description">
                {props.children}
            </div>
        </div>
    );
}

export default SkillCard;

SkillCard.propTypes = {
    skillID: PropTypes.array
}