import React from 'react';
import PropTypes from 'prop-types';

const SkillCard = (props) => {
    return (
        <div class="card trait-card-2">
            <div class="card-header">
                <span data-armory-embed="skills" data-armory-size="50" data-armory-inline-text="wiki" data-armory-ids={props.skillID}></span>
                <div class="filler"></div>
            </div>
            <div class="card-body">
                {props.children}
            </div>
        </div>
    );
}

export default SkillCard;

SkillCard.propTypes = {
    skillID: PropTypes.array
}