import React from "react";
import PropTypes from 'prop-types';

const NavTabs = (props) => {
    return (
        <>
        <nav className="nav nav-pills flex-nowrap flex-row custom-nav">
            {props.tabNames.map((name, index) => (
                <a className={"nav-link flex-fill text-center"+(index === 0 ? " active" : '')} href={"#"+props.hrefs[index]} id={name+"-tab"} data-toggle="pill" role="tab" aria-controls={name} aria-selected={index === 0 ? "true" : "false"}>{name}</a>
            ))}
        </nav>
        <div className="tab-content custom-tab-content">
            {props.children}
        </div>
        </>
    );
}

export default NavTabs;

NavTabs.propTypes = {
    tabNames: PropTypes.arrayOf(PropTypes.string),
    hrefs: PropTypes.arrayOf(PropTypes.string)
}