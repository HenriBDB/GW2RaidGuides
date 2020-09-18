import React from "react";
import PropTypes from 'prop-types';

const TabPane = (props) => {
    return (
        <div className={"tab-pane fade"+(props.active ? " show active" : "")} id={props.tabName} role="tabpanel" aria-labelledby={props.tabName+"-card"}>
            {props.children}
        </div>
    );
}

export default TabPane;

TabPane.propTypes = {
    tabName: PropTypes.string,
    active: PropTypes.bool
}