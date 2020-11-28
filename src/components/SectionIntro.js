import React from "react";

const SectionIntro = (props) => {
    return (
        <div className="centered-flex-row">
            <div className="section-intro">
                {props.children}
            </div>
        </div>
    );
}

export default SectionIntro;