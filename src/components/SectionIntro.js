import React from "react";

const SectionIntro = (props) => {
    return (
        <div class="centered-flex-row">
            <p class="section-intro">
                {props.children}
            </p>
        </div>
    );
}

export default SectionIntro;