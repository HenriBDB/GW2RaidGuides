import React from "react";
import PropTypes from 'prop-types';

const GuideTitle = (props) => {
    return (
        <div className="centered-flex-row">
            <div className="title-card">
                <div className="title">
                    <h1>{props.title}</h1>
                    <footer>&mdash; {props.footer}</footer>
                </div>
            </div>
        </div>
    );
}

export default GuideTitle;

GuideTitle.propTypes = {
    title: PropTypes.string,
    footer: PropTypes.string
}