import React from "react";
import PropTypes from 'prop-types';

const SectionTitle = (props) => {
    return (
        <div className={"centered-flex-row section-title " + props.gameClass}>
            <h3>{props.title}</h3>
        </div>
    );
}

export default SectionTitle;

SectionTitle.propTypes = {
    gameClass: PropTypes.string,
    title: PropTypes.string
}