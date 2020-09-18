import React from "react";
import PropTypes from 'prop-types';

const SectionTitle = (props) => {
    return (
        <div className={"d-flex flex-row justify-content-center section-title " + props.gameClass}>
            <h3 className="my-1">{props.title}</h3>
        </div>
    );
}

export default SectionTitle;

SectionTitle.propTypes = {
    gameClass: PropTypes.string,
    title: PropTypes.string
}