import React, { useState } from "react"
import PropTypes from 'prop-types'
import { Link } from 'react-scroll'
import Arrow from '../assets/icons/arrow-white.png'
import { ArrowMoreButton } from './Dragonhunter/styles'

const SectionCollapsible = (props) => {
    const [sectionVisible, setSectionVisible] = useState(false)

    const variantsArrow = {
        opened: { rotate: 180 },
        closed: { rotate: 0 }
    }

    const toggleVisible = () => {
        setSectionVisible(!sectionVisible)
    }

    const setVisible = () => {
        setSectionVisible(true)
    }

    return (
        <>
        <Link to={props.id} smooth={true} duration={1000} onClick={toggleVisible}>
            <div id={props.id} className={"centered-flex-row section-title " + props.gameClass} onCLick={setVisible}>
                <h3>{props.title}</h3>
                <ArrowMoreButton
                    src={Arrow}
                    variants={variantsArrow}
                    animate={sectionVisible ? "opened" : "closed"}
                    transition={{ duration: "0.5" }}
                />
            </div>
        </Link>
        <div style={{ display: sectionVisible ? 'block' : 'none' }}>
            <div id={props.id+"-section"} onClick={setVisible}></div>
            {props.children}
        </div>
        </>
    )
}

export default SectionCollapsible

SectionCollapsible.propTypes = {
    gameClass: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string
}