import React from "react";

const SectionIntro = (props) => {
    return (
        <div class="row justify-content-center">
            <p class="col-lg-8 font-italic">
                {props.children}
            </p>
        </div>
    );
}

export default SectionIntro;