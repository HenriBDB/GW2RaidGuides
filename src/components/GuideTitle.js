import React from "react";
import PropTypes from 'prop-types';

const GuideTitle = (props) => {
    return (
        <div class="d-flex flex-row justify-content-center">
            <div class="card px-5 py-4 mt-4 title-card">
                <blockquote class="blockquote mb-0">
                    <h1 class="font-italic">{props.title}</h1>
                    <footer class="blockquote-footer">{props.footer}</footer>
                </blockquote>
            </div>
        </div>
    );
}

export default GuideTitle;

GuideTitle.propTypes = {
    title: PropTypes.string,
    footer: PropTypes.string
}