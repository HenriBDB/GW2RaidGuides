import React from "react";

const SectionIntro = (props) => {
    return (
        <div class="centered-flex-row">
            <div class="section-intro">
                {props.children}
            </div>
        </div>
    );
}

export default SectionIntro;