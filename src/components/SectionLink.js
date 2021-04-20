import React from "react"
import PropTypes from 'prop-types'
import { Link } from 'react-scroll'

// Intended to be used to open a SectionCollapsible
const SectionLink = (props) => {
    
    const openSection = () => {
        document.getElementById(props.sectionId+"-section").click()
    }

    return (
        <Link to={props.sectionId} onClick={openSection} smooth={true} duration={1000}>
            {props.children}
        </Link>
    )
}

export default SectionLink

SectionLink.propTypes = {
    sectionId: PropTypes.string
}