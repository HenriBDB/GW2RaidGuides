import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const CopyTemplate = (props) => {
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
    };
    return (
        <div className="copy-template">
            <div className="copy-template-name">
                {props.templateName}
            </div>
            <div className="copy-template-content">
                <div className="copy-template-message">
                    <button
                        className={"copy-template-button " + props.gameClass}
                        onClick={copyToClipboard}>
                        Copy template
                </button>
                    <div className="copy-template-success">
                        {copySuccess}
                    </div>
                </div>
                <form>
                    <input className="copy-template-area"
                        ref={textAreaRef}
                        value={props.template}
                    />
                </form>
            </div>
        </div>
    );
}

export default CopyTemplate;

CopyTemplate.propTypes = {
    gameClass: PropTypes.string,
    template: PropTypes.number,
    templateName: PropTypes.string
}